import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Reveal from './Reveal'

const projects = [
  {
    title: 'Project One',
    image: 'https://placehold.co/600x400',
    desc: 'Short case study describing problem, approach, and impact.',
    tech: ['Next.js', 'Tailwind', 'Node'],
    live: '#',
    repo: '#'
  },
  {
    title: 'Project Two',
    image: 'https://placehold.co/600x400',
    desc: 'Brief case study summary for project two.',
    tech: ['React', 'Express', 'Postgres'],
    live: '#',
    repo: '#'
  },
  // add 4 more placeholders
  { title: 'Project Three', image: 'https://placehold.co/600x400', desc: 'Description', tech: ['AI', 'Python'], live: '#', repo: '#' },
  { title: 'Project Four', image: 'https://placehold.co/600x400', desc: 'Description', tech: ['Next.js', 'Vercel'], live: '#', repo: '#' },
  { title: 'Project Five', image: 'https://placehold.co/600x400', desc: 'Description', tech: ['React', 'GraphQL'], live: '#', repo: '#' },
  { title: 'Project Six', image: 'https://placehold.co/600x400', desc: 'Description', tech: ['TS', 'Tailwind'], live: '#', repo: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <p className="text-slate-300 mb-6">Selected projects — case studies with links to live demos and source code.</p>

        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={p.title} role="article" aria-labelledby={`proj-${idx}`} className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-44">
                <Image src={p.image} alt={p.title} fill style={{objectFit:'cover'}} />
              </div>
              <div className="p-4">
                <h3 id={`proj-${idx}`} className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-slate-300 text-sm mt-2">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2 text-sm text-slate-400" aria-hidden="true">
                    {p.tech.map(t => <span key={t} className="px-2 py-1 bg-neutral-700 rounded-md">{t}</span>)}
                  </div>

                  <div className="flex gap-3">
                    <a href={p.live} className="text-slate-200 hover:text-white" aria-label={`Live demo for ${p.title}`}><FaExternalLinkAlt /></a>
                    <a href={p.repo} className="text-slate-200 hover:text-white" aria-label={`Source code for ${p.title}`}><FaGithub /></a>
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
