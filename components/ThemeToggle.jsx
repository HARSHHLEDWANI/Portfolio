import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle(){
  const { dark, setDark } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(()=> setMounted(true), [])
  if(!mounted) return <button aria-hidden className="p-2 rounded-md bg-neutral-800 text-slate-200">…</button>

  return (
    <button
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setDark(!dark)}
      className="p-2 rounded-md bg-neutral-800 text-slate-200 hover:bg-neutral-700 transition"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
