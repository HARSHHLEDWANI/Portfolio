import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Harsh Ledwani | Full-Stack Developer & AI Enthusiast</title>
      <meta name="description" content="Portfolio of Harsh Ledwani, a Computer Science student specializing in full-stack development, machine learning, and blockchain projects. Explore work on donation platforms, fraud detection systems, e-commerce, and AI-based meal planning." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Harsh Ledwani | Full-Stack Developer & AI Enthusiast" />
      <meta property="og:description" content="Portfolio of Harsh Ledwani, a Computer Science student specializing in full-stack development, machine learning, and blockchain projects. Explore work on donation platforms, fraud detection systems, e-commerce, and AI-based meal planning." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Harsh Ledwani | Full-Stack Developer & AI Enthusiast" />
      <meta name="twitter:description" content="Portfolio of Harsh Ledwani, a Computer Science student specializing in full-stack development, machine learning, and blockchain projects. Explore work on donation platforms, fraud detection systems, e-commerce, and AI-based meal planning." />
      <meta name="twitter:image" content="/twitter-image.jpg" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO;

