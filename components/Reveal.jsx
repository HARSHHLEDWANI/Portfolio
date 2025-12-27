import { useRef, useEffect } from 'react'

export default function Reveal({ children, className = '' }){
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if(!el) return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-show')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    el.classList.add('reveal-hidden')
    obs.observe(el)

    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${className}`}>
      {children}
    </div>
  )
}
