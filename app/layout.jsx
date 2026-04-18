import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';
import { PageLoader } from './components/PageLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { SpecialEffects } from './components/effects/SpecialEffects';
import { CustomCursor } from './components/CustomCursor';
import '../styles/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Harsh Ledwani — Full-Stack Developer',
  description: 'Computer Science undergraduate building full-stack systems, ML pipelines, and interactive web experiences. Based in India.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, Machine Learning, Python, Portfolio',
  authors: [{ name: 'Harsh Ledwani', url: 'https://github.com/HARSHHLEDWANI' }],
  openGraph: {
    title: 'Harsh Ledwani — Full-Stack Developer',
    description: 'Building robust, scalable systems at the intersection of engineering and design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Ledwani — Full-Stack Developer',
    description: 'Building robust, scalable systems at the intersection of engineering and design.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7B6EFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${jakarta.variable} ${mono.variable} bg-dark-bg text-dark-text antialiased overflow-x-hidden`}>
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
