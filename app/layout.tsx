import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Harsh Ledwani — Full-Stack Developer & AI Builder',
  description: 'CS undergraduate at SIT Pune building ML systems, web platforms, and AI products. Open to internships 2026.',
  keywords: 'Full Stack Developer, React, Next.js, Machine Learning, Python, AI, Portfolio',
  authors: [{ name: 'Harsh Ledwani', url: 'https://github.com/HARSHHLEDWANI' }],
  openGraph: {
    title: 'HARSH.SYS — Harsh Ledwani Portfolio',
    description: 'Full-Stack Developer · AI Builder · CS @ SIT Pune',
    url: 'https://harsh-ledwani.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#080B14" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
        style={{ background: '#080B14', color: '#F0EDE8' }}
      >
        {children}
      </body>
    </html>
  );
}
