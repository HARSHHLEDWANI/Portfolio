import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

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
        <Link href="#home">
          <a className="font-bold text-xl text-white">Harsh Ledwani</a>
        </Link>

        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex gap-6 items-center text-slate-200">
          <a href="#about" className={`hover:text-white ${active==='about'?'text-primary font-semibold':'text-slate-200'}`} aria-current={active==='about'? 'page' : undefined}>About</a>
          <a href="#skills" className={`hover:text-white ${active==='skills'?'text-primary font-semibold':'text-slate-200'}`} aria-current={active==='skills'? 'page' : undefined}>Skills</a>
          <a href="#projects" className={`hover:text-white ${active==='projects'?'text-primary font-semibold':'text-slate-200'}`} aria-current={active==='projects'? 'page' : undefined}>Projects</a>
          <a href="#contact" className={`hover:text-white ${active==='contact'?'text-primary font-semibold':'text-slate-200'}`} aria-current={active==='contact'? 'page' : undefined}>Contact</a>
          <a href="/resume" className="hover:text-white text-slate-200">Resume</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-900/95" role="dialog" aria-label="Mobile menu">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a href="#about" onClick={() => setOpen(false)} aria-current={active==='about'?'page':undefined}>About</a>
            <a href="#skills" onClick={() => setOpen(false)} aria-current={active==='skills'?'page':undefined}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} aria-current={active==='projects'?'page':undefined}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} aria-current={active==='contact'?'page':undefined}>Contact</a>            <a href="/resume" onClick={() => setOpen(false)}>Resume</a>          </div>
        </div>
      )}
    </header>
  )
}
