import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Resume = () => {
  const resumeDriveUrl = import.meta.env.VITE_RESUME_DRIVE_URL || 'https://drive.google.com/file/d/1298Lx4K86on1NKBcsEx4iFKJUgqfaRTo/view?usp=drive_link';
  
  // Convert view link to embeddable format (handles both Google Docs and Drive files)
  const getEmbedUrl = (url) => {
    // Check if it's a Google Docs link
    const docsMatch = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
    if (docsMatch) {
      return `https://docs.google.com/document/d/${docsMatch[1]}/preview`;
    }
    // Check if it's a regular Drive file link
    const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) {
      return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
    }
    return url;
  };

  // Get download URL (handles both Google Docs and Drive files)
  const getDownloadUrl = (url) => {
    // Check if it's a Google Docs link
    const docsMatch = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
    if (docsMatch) {
      return `https://docs.google.com/document/d/${docsMatch[1]}/export?format=pdf`;
    }
    // Check if it's a regular Drive file link
    const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) {
      return `https://drive.google.com/uc?export=download&id=${fileMatch[1]}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(resumeDriveUrl);
  const downloadUrl = getDownloadUrl(resumeDriveUrl);

  return (
    <>
      <Helmet>
        <title>Resume | Harsh Ledwani</title>
        <meta
          name="description"
          content="View and download the resume of Harsh Ledwani, a Computer Science student and full-stack developer focused on AI, ML, and blockchain projects."
        />
      </Helmet>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-mono text-light-accent dark:text-dark-accent tracking-wider uppercase">
                    Resume
                  </span>
                  <div className="flex-1 h-px bg-light-border dark:bg-dark-border" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
                  Resume
                </h1>
                <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mb-8">
                  Here's a quick view of my resume. You can also open it in Google Drive or download it.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    variant="primary"
                    href={resumeDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Drive
                  </Button>
                  <Button
                    variant="secondary"
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl overflow-hidden shadow-xl"
              >
                <iframe
                  src={embedUrl}
                  className="w-full h-[600px] md:h-[800px] lg:h-[900px] border-0"
                  title="Resume Preview"
                  allow="autoplay"
                />
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;

