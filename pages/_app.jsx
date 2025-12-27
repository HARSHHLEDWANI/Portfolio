import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeProvider'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react' 

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [reduceMotion, setReduceMotion] = useState(false)
  useEffect(()=>{
    if(typeof window === 'undefined') return
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(!!(mq && mq.matches))
  },[])

  const pageMotion = !reduceMotion ? { initial: {opacity:0, y:8}, exit: {opacity:0, y:-8} } : {}

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Skip to content link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute top-4 left-4 bg-primary text-neutral-900 px-3 py-2 rounded-md">Skip to content</a>

      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div key={router.asPath} {...pageMotion} animate={{opacity:1, y:0}} transition={{duration:0.35}}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence> 
    </ThemeProvider>
  )
}
