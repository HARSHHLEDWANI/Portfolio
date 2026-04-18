import { Bebas_Neue, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Providers } from './providers';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import '../styles/globals.css';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Harsh Ledwani — Full-Stack Developer',
  description: 'CS undergraduate at SIT Pune building systems at the intersection of AI, Blockchain, and Full-Stack Engineering.',
  keywords: 'Full Stack Developer, React, Next.js, Machine Learning, Python, Blockchain, AI, Portfolio',
  authors: [{ name: 'Harsh Ledwani', url: 'https://github.com/HARSHHLEDWANI' }],
  openGraph: {
    title: 'Harsh Ledwani — Full-Stack Developer',
    description: 'CS undergraduate building AI · Blockchain · Full-Stack systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${bebasNeue.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} antialiased overflow-x-hidden`}
        style={{ background: '#0A0A0A', color: '#F0EDE8' }}
      >
        <CustomCursor />
        <ScrollProgress />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
