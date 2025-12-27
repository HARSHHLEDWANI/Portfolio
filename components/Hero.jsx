import { motion } from 'framer-motion'
import TypingText from './TypingText'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="md:pr-6">
          <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">Harsh Ledwani</h1>
            <p className="mt-4 text-xl text-slate-300">I craft modern web apps & AI-powered experiences. <span className="text-accent-cyan"><TypingText text={"I build resilient offline-first sync engines, payment integrations, and ML-powered tooling."} speed={30} /></span></p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent-purple text-black font-semibold hover:scale-105 transform transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-neutral-800">Contact Me</a>
            </div>

            <p className="mt-6 text-sm text-slate-400 max-w-xl">Full stack developer focused on performance, accessibility, and practical AI integrations — shipping production-ready features and scalable systems.</p>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.2}} className="relative mx-auto w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden animate-float shadow-2xl bg-gradient-to-br from-accent-purple to-accent-sky">
            <div role="img" aria-label="Profile placeholder" className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold">HL</div>
            {/* subtle animated svg */}
            <svg className="absolute -bottom-6 right-2 opacity-20" width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#7F5AF0" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="80" r="80" fill="url(#g1)"></circle>
            </svg>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
