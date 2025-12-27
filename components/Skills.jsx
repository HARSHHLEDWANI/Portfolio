import Reveal from './Reveal'
import { skills } from '../data/skills'
import { FaCircle, FaReact, FaNodeJs, FaPython, FaDatabase, FaCode, FaLayerGroup } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiGit, SiVisualstudiocode, SiGooglecolab, SiJavascript, SiHtml5, SiCss3, SiJava, SiCplusplus, SiPytorch } from 'react-icons/si'

const iconMap = {
  'React.js': FaReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'TypeScript': FaCode,
  'Node.js': FaNodeJs,
  'Python': FaPython,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'MySQL': FaDatabase,
  'Pandas': FaLayerGroup,
  'NumPy': FaLayerGroup,
  'Scikit-learn': FaLayerGroup,
  'PyTorch': SiPytorch,
  'Git': SiGit,
  'GitHub': SiGit,
  'Visual Studio Code': SiVisualstudiocode,
  'Google Colab': SiGooglecolab,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Java': SiJava,
  'C++': SiCplusplus,
  'Data Structures & Algorithms': FaLayerGroup,
  'Object-Oriented Programming': FaLayerGroup,
  'Database Management Systems': FaDatabase,
  'Operating Systems': FaCode,
}

function getIconFor(item){
  const name = item.replace(/\s*\(.*\)/,'').trim() // strip parenthetical notes
  // direct match
  if(iconMap[name]) return iconMap[name]
  // partial match: try keys that are included in the item
  for(const key of Object.keys(iconMap)){
    const candidate = iconMap[key]
    if(name.toLowerCase().includes(key.toLowerCase()) && candidate) return candidate
  }
  return FaCircle
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
          <p className="text-slate-300 mb-6">Organized skillset grouped by domain — technical and interpersonal strengths.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="bg-neutral-800 rounded-lg p-5">
                <h4 className="text-white font-semibold">{group.category}</h4>
                <ul className="mt-3 text-slate-300 text-sm space-y-2">
                  {group.items.map((item) => {
                    const Icon = getIconFor(item)
                    return (
                      <li key={item} className="flex items-center gap-3">
                        <Icon size={16} className="text-primary flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
