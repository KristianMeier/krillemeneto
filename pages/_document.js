import { Html, Head, Main, NextScript } from 'next/document'

// Her er Next.js halløj for strukturen med HTML etc.

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />
        <link
          rel='icon'
          href='https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png'
        />
      </Head>
      <body className='body-smoothening'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
