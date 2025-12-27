import Reveal from './Reveal'

export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-white">Get in touch</h2>
          <p className="text-slate-300 mb-6">Interested in working together? Send a message and I'll get back to you.</p>

          <form className="grid gap-4" onSubmit={(e)=>{ e.preventDefault(); alert('This is a placeholder — wire up your backend or Formspree.') }}>
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" className="rounded-md p-3 bg-neutral-800 border border-neutral-700 text-slate-200" placeholder="Your name" required />

          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="rounded-md p-3 bg-neutral-800 border border-neutral-700 text-slate-200" placeholder="you@company.com" required />

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" className="rounded-md p-3 bg-neutral-800 border border-neutral-700 text-slate-200" placeholder="How can I help?" required></textarea>

          <div className="flex gap-4">
            <button type="submit" className="px-5 py-3 bg-primary rounded-md font-semibold text-neutral-900">Send Message</button>
            <a href="mailto:hi@example.com" className="px-5 py-3 border rounded-md text-slate-200 hover:bg-neutral-800">Email</a>
          </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}