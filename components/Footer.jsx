export default function Footer(){
  return (
    <footer className="border-t border-neutral-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Harsh Ledwani — All rights reserved.</div>
        <nav className="flex gap-4 text-slate-300">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="/resume">Resume</a>
        </nav>
      </div>
    </footer>
  )
}