import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Preconnect to Plasmic CDN for faster asset loading */}
        <link rel="preconnect" href="https://cdn.plasmic.app" />
        <link rel="dns-prefetch" href="https://cdn.plasmic.app" />
        
        {/* Preconnect to Google Fonts (if used by Plasmic) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
