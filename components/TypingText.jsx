import { useEffect, useState } from 'react'

// Minimal typing effect component — progressive reveal of `text` (respects prefers-reduced-motion)
export default function TypingText({ text = '', speed = 40, className = '' }){
  const [display, setDisplay] = useState('')
  useEffect(()=>{
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(prefersReduced){ setDisplay(text); return }

    let i = 0
    let mounted = true
    function tick(){
      if(!mounted) return
      setDisplay(text.slice(0, i))
      if(i < text.length){ i++; setTimeout(tick, speed) }
    }
    tick()
    return ()=> { mounted = false }
  }, [text, speed])

  return <span className={className} aria-live="polite">{display}</span>
}
