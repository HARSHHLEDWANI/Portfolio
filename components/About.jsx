import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-white">About</h2>
          <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 text-slate-300">
            <p className="mb-4">Hi, I'm Harsh — a Full Stack Developer & AI enthusiast building scalable web apps and smart experiences. I enjoy working across the stack, shipping production-ready features, and learning new ways to integrate AI responsibly into user-facing products.</p>
            <p className="mb-4">Currently focused on React, Next.js, TypeScript (opt-in), Node.js, and applying ML models for enhanced user experiences.</p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div>
                <h4 className="font-semibold text-white">Frontend</h4>
                <ul className="text-slate-300 text-sm mt-2">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white">Backend</h4>
                <ul className="text-slate-300 text-sm mt-2">
                  <li>Node.js / Express</li>
                  <li>Postgres / Prisma</li>
                  <li>APIs & Auth</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white">AI / Data</h4>
                <ul className="text-slate-300 text-sm mt-2">
                  <li>ML Integration</li>
                  <li>Vector Search</li>
                  <li>Prompt Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block text-center">
            {/* small bio card */}
            <div className="bg-neutral-800 rounded-xl p-6">
              <p className="text-sm text-slate-400">I'm available for freelance & full-time roles. Interested in collaboration? Let's build something together.</p>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
