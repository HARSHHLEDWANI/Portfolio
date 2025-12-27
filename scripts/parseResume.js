const fs = require('fs')
const pdfModule = require('pdf-parse')
const pdf = pdfModule.default || pdfModule

async function parse() {
  const dataBuffer = fs.readFileSync('./public/resume.pdf')
  const data = await pdf(dataBuffer)
  const text = data.text

  // crude parsing: split into lines and find headings
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean)

  const sections = {}
  let current = 'summary'
  sections[current] = []

  const headings = ['skills', 'projects', 'experience', 'education', 'summary', 'profile', 'contact']

  for (let i=0;i<lines.length;i++){
    const line = lines[i]
    const low = line.toLowerCase()
    if (headings.includes(low)){
      current = low
      sections[current] = []
      continue
    }

    // detect headings like 'Skills:' or 'SKILLS'
    const h = line.replace(':','').toLowerCase()
    if (headings.includes(h)){
      current = h
      sections[current] = []
      continue
    }

    // group bullet lists under projects or skills
    sections[current].push(line)
  }

  // basic project detection: lines starting with a capitalized title followed by a dash or colon
  const projects = []
  if (sections.projects && sections.projects.length){
    // try to split blocks by blank lines in original pdf text
    // fallback: group every 2-4 lines as a project
    const projLines = sections.projects
    let i = 0
    while (i < projLines.length){
      const title = projLines[i]
      let desc = ''
      let j = i+1
      while (j < i+4 && j < projLines.length){ desc += (projLines[j] + ' '); j++ }
      projects.push({ title: title, desc: desc.trim() })
      i = j
    }
  }

  const skills = sections.skills ? sections.skills.join(' | ') : ''
  const summary = sections.summary ? sections.summary.slice(0,6).join(' ') : ''

  const result = { summary, skills, projects }
  fs.writeFileSync('./scripts/parsedResume.json', JSON.stringify(result, null, 2))
  console.log(JSON.stringify(result, null, 2))
}

parse().catch(err=>{ console.error(err); process.exit(1) })
