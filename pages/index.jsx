import Head from 'next/head'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Ledwani — Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="I craft modern web apps & AI-powered experiences." />
        <meta name="theme-color" content="#0ea5a4" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-slate-100">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
