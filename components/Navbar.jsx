import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle' 

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on Escape
  useEffect(()=>{
    const onKey = (e) => { if(e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  },[])

  // Scroll spy: highlight active section
  useEffect(()=>{
    const ids = ['home','about','skills','projects','contact']
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ setActive(entry.target.id) }
      })
    }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 })

    ids.forEach(id=>{ const el = document.getElementById(id); if(el) obs.observe(el) })
    return ()=> obs.disconnect()
  },[])

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-lg bg-neutral-900/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="font-bold text-xl text-white">Harsh Ledwani</Link>

        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex gap-6 items-center text-slate-200">
          <motion.a href="#about" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className={`hover:text-white ${active==='about'?'text-accent-purple font-semibold':'text-slate-200'}`} aria-current={active==='about'? 'page' : undefined}>About</motion.a>
          <motion.a href="#skills" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className={`hover:text-white ${active==='skills'?'text-accent-purple font-semibold':'text-slate-200'}`} aria-current={active==='skills'? 'page' : undefined}>Skills</motion.a>
          <motion.a href="#projects" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className={`hover:text-white ${active==='projects'?'text-accent-purple font-semibold':'text-slate-200'}`} aria-current={active==='projects'? 'page' : undefined}>Projects</motion.a>
          <motion.a href="#contact" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className={`hover:text-white ${active==='contact'?'text-accent-purple font-semibold':'text-slate-200'}`} aria-current={active==='contact'? 'page' : undefined}>Contact</motion.a>
          <motion.a href="/resume" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className="hover:text-white text-slate-200">Resume</motion.a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-900/95" role="dialog" aria-label="Mobile menu">
          <div className="flex flex-col px-6 py-4 gap-4">
            <motion.a href="#about" onClick={() => setOpen(false)} whileTap={{ scale: 0.98 }} aria-current={active==='about'?'page':undefined}>About</motion.a>
            <motion.a href="#skills" onClick={() => setOpen(false)} whileTap={{ scale: 0.98 }} aria-current={active==='skills'?'page':undefined}>Skills</motion.a>
            <motion.a href="#projects" onClick={() => setOpen(false)} whileTap={{ scale: 0.98 }} aria-current={active==='projects'?'page':undefined}>Projects</motion.a>
            <motion.a href="#contact" onClick={() => setOpen(false)} whileTap={{ scale: 0.98 }} aria-current={active==='contact'?'page':undefined}>Contact</motion.a>
            <motion.a href="/resume" onClick={() => setOpen(false)} whileTap={{ scale: 0.98 }}>Resume</motion.a>
          </div>
        </div>
      )}
    </header>
  )
}
