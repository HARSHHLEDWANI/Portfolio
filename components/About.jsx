import Reveal from './Reveal'
import { resume } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-white">About</h2>
          <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 text-slate-300">
            <p className="mb-4">{resume.summary}</p>
            <p className="mb-4">I am actively strengthening my skills in data structures, backend system design, and scalable application development while working on modern, production-oriented projects.</p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div>
                <h4 className="font-semibold text-white">Languages & CS</h4>
                <ul className="text-slate-300 text-sm mt-2">
                  <li>C / C++ / Java / Python</li>
                  <li>Data Structures & Algorithms</li>
                  <li>OOP & System Design</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white">Frontend</h4>
                <ul className="text-slate-300 text-sm mt-2">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>Tailwind CSS / HTML5</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white">Backend & Data</h4>
                <ul className="text-slate-300 text-sm mt-2">
                  <li>Node.js / Express</li>
                  <li>MongoDB / PostgreSQL</li>
                  <li>ML Tooling (Pandas, scikit-learn)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block text-center">
            {/* contact card */}
            <div className="bg-neutral-800 rounded-xl p-6 text-left">
              <h3 className="text-white font-semibold mb-2">{resume.name}</h3>
              <p className="text-slate-300 text-sm mb-2">📧 <a href={`mailto:${resume.contact.email}`} className="underline">{resume.contact.email}</a></p>
              <p className="text-slate-300 text-sm mb-2">📞 <a href={`tel:${resume.contact.phone.replace(/\s+/g,'')}`} className="underline">{resume.contact.phone}</a></p>
              <p className="text-slate-300 text-sm mb-2">🔗 <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="underline">github.com/harshhledwani</a></p>
              <p className="text-slate-300 text-sm">🔗 <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/harshledwani</a></p>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
