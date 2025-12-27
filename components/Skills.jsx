import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Reveal from './Reveal'

const tech = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
          <p className="text-slate-300 mb-6">Technologies I use frequently — focused on performance, accessibility, and developer experience.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {tech.map((t) => {
            const Icon = t.icon
            return (
              <div key={t.name} className="bg-neutral-800 rounded-lg p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform" aria-label={t.name}>
                <Icon size={28} className="text-primary" />
                <span className="text-slate-200 text-sm">{t.name}</span>
              </div>
            )
          })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
