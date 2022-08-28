import Link from 'next/link'
import { PrismicLink, PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'

import { repositoryName, linkResolver } from '../prismicio'

import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/sandbox.css'
import { Heading } from '../components/Heading'

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale}>
      <a {...props}>{children}</a>
    </Link>
  )
}

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as='h2' size='3xl' className='richtext-h2'>
      {children}
    </Heading>
  ),

  heading2: ({ children }) => (
    <Heading as='h3' size='2xl' className='richtext-h3'>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as='h4' size='xl' className='richtext-h3'>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className='richtext-p'>{children}</p>,
  oList: ({ children }) => <ol className='richtext-olist'>{children}</ol>,
  oListItem: ({ children }) => (
    <li className='richtext-olist-item'>{children}</li>
  ),
  list: ({ children }) => <ul className='richtext-ulist'>{children}</ul>,
  listItem: ({ children }) => (
    <li className='richtext-ulist-item'>{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className='richtext-pre'>
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className='richtext-strong'>{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className='text-hyperlink'>
      {children}
    </PrismicLink>
  ),
}

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
