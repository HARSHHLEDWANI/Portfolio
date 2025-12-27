import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Resume(){
  return (
    <>
      <SEO title="Resume — Harsh Ledwani" description="Download or view the resume of Harsh Ledwani, Full Stack Developer & AI Enthusiast." />
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-slate-100">
        <Navbar />
        <main role="main" aria-label="Resume" className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-white mb-6">Resume</h1>

          <p className="text-slate-300 mb-6">You can view the resume below or download a copy.</p>

          <div className="mb-6 flex gap-3">
            <a className="inline-block px-4 py-2 bg-primary text-neutral-900 rounded-md font-semibold" href="/resume.pdf" download aria-label="Download resume">Download Resume</a>
            <a className="inline-block px-4 py-2 border rounded-md text-slate-200" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume in new tab">Open in new tab</a>
          </div>

          <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">
            <object data="/resume.pdf" type="application/pdf" width="100%" height="720" aria-label="Resume PDF viewer">
              <p className="p-6 text-slate-300">Your browser does not support inline PDFs. You can <a href="/resume.pdf" className="text-primary underline">download the PDF</a> instead.</p>
            </object>
          </div>

          <p className="mt-6 text-sm text-slate-400">Tip: Replace <code>/public/resume.pdf</code> with your final PDF file.</p>
        </main>
        <Footer />
      </div>
    </>
  )
}