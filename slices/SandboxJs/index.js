import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const SandboxJs = ({ slice }) => (
  <section>
    <span className='title'>
      <PrismicRichText field={slice.primary.title} />
    </span>
  </section>
)

export default SandboxJs
