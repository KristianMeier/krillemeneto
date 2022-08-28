import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const SandboxNext = ({ slice }) => (
  <section className='sandbox-container'>
    <PrismicRichText field={slice.primary.title} />
    {slice?.items?.map((item, i) => (
      <article className='sandbox-text'>
        <PrismicRichText field={item.name} />
        <img
          className='sandbox-picture'
          src={item.picture.url}
          alt={item.picture.alt}
        />
      </article>
    ))}
  </section>
)

export default SandboxNext
