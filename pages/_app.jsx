import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeProvider'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Skip to content link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute top-4 left-4 bg-primary text-neutral-900 px-3 py-2 rounded-md">Skip to content</a>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
