import Link from 'next/link'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="md:pr-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">Harsh Ledwani</h1>
            <p className="mt-4 text-xl text-slate-300">I craft modern web apps & AI-powered experiences.</p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-neutral-900 font-semibold hover:opacity-95">View Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-neutral-800">Contact Me</a>
            </div>

            <p className="mt-6 text-sm text-slate-400 max-w-xl">Full stack developer focused on performant frontends, accessible design, and practical AI integrations — building delightful products and shipping fast.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden animate-float shadow-2xl">
            {/* placeholder: solid color box until real image is provided */}
            <div role="img" aria-label="Profile placeholder" className="absolute inset-0" style={{backgroundColor: '#06b6d4'}} />
            <div className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold">HL</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
