const fs = require('fs')
const path = require('path')
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js')

async function extractText(filePath){
  const raw = new Uint8Array(fs.readFileSync(filePath))
  const doc = await pdfjsLib.getDocument({data: raw}).promise
  let fullText = ''
  for (let i=1;i<=doc.numPages;i++){
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const strings = content.items.map(i => i.str)
    fullText += strings.join(' ') + '\n\n'
  }
  return fullText
}

async function main(){
  const file = path.resolve('./public/resume.pdf')
  const text = await extractText(file)
  const lines = text.split(/\n+/).map(l=>l.trim()).filter(Boolean)

  // naive section parsing
  const sections = {}
  let cur='summary'
  sections[cur]=[]
  const headings = ['skills','projects','experience','education','summary','profile','contact','work experience']
  for(const line of lines){
    const l = line.toLowerCase().replace(':','')
    if(headings.includes(l)){
      cur = l
      sections[cur]=[]
      continue
    }
    sections[cur].push(line)
  }

  // create simplified JSON
  const skills = sections.skills ? sections.skills.join(' | ') : ''
  const summary = sections.summary ? sections.summary.slice(0,6).join(' ') : sections.summary.join(' ')
  const projects = []
  if (sections.projects && sections.projects.length){
    const lines = sections.projects
    for(let i=0;i<lines.length;i+=3){
      const title = lines[i]
      const desc = lines.slice(i+1,i+3).join(' ')
      projects.push({ title, desc })
    }
  }

  const out = { summary, skills, projects }
  fs.writeFileSync('./scripts/parsedResume2.json', JSON.stringify(out, null, 2))
  console.log(JSON.stringify(out, null, 2))
}

main().catch(err=>{ console.error(err); process.exit(1) })
