import Head from 'next/head'

export default function SEO({ title, description, openGraph }){
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
