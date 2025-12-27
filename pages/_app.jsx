import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeProvider'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Skip to content link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute top-4 left-4 bg-primary text-neutral-900 px-3 py-2 rounded-md">Skip to content</a>

      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div key={router.asPath} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.35}}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
