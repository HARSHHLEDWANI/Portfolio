import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const [dark, setDark] = useState(undefined)

  // Initialize theme from localStorage or system preference
  useEffect(()=>{
    if(typeof window === 'undefined') return
    try{
      const saved = localStorage.getItem('theme')
      if(saved === 'dark') setDark(true)
      else if(saved === 'light') setDark(false)
      else setDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }catch(err){ setDark(true) }
  },[])

  // Apply html class and persist
  useEffect(()=>{
    if(typeof dark === 'undefined') return
    document.documentElement.classList.toggle('dark', dark)
    try{ localStorage.setItem('theme', dark ? 'dark' : 'light') }catch(err){}
  },[dark])

  return (
    <ThemeContext.Provider value={{ dark: !!dark, setDark: (v) => setDark(Boolean(v)) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){ return useContext(ThemeContext) }
