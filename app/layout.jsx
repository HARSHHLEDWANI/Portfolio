import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';
import { PageLoader } from './components/PageLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { SpecialEffects } from './components/effects/SpecialEffects';
import { CustomCursor } from './components/CustomCursor';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Harsh Ledwani — Full-Stack Developer',
  description: 'CS undergraduate building secure, scalable systems at the intersection of AI and full-stack engineering. Based in India.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, Machine Learning, Python, Blockchain, Portfolio',
  authors: [{ name: 'Harsh Ledwani', url: 'https://github.com/HARSHHLEDWANI' }],
  openGraph: {
    title: 'Harsh Ledwani — Full-Stack Developer',
    description: 'Building robust, scalable systems at the intersection of AI and engineering.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Ledwani — Full-Stack Developer',
    description: 'Building robust, scalable systems at the intersection of AI and engineering.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7C3AED" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} ${mono.variable} bg-dark-bg text-dark-text antialiased overflow-x-hidden`}
      >
        <CustomCursor />
        <SpecialEffects />
        <Providers>
          <PageLoader />
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  );
}
