import { useState } from 'react'
import Reveal from './Reveal'

const slides = [
  { name: 'Jane Doe — PM', text: 'Harsh delivered a polished product and iterated quickly. Highly recommended.' },
  { name: 'John Smith — Lead Eng', text: 'Great collaborator and strong engineering fundamentals.' },
  { name: 'Bettina — Design Lead', text: 'Thoughtful design and accessibility-first mindset.' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-white">Testimonials</h2>

          <div className="bg-neutral-800 p-6 rounded-lg">
          <p className="text-slate-300">“{slides[index].text}”</p>
          <p className="mt-4 text-sm text-slate-400">— {slides[index].name}</p>

          <div className="mt-4 flex gap-2 justify-center">
            {slides.map((s,i)=>(
              <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full ${i===index? 'bg-primary' : 'bg-neutral-700'}`} aria-label={`Slide ${i+1}`}></button>
            ))}
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}