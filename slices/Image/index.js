import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { Bounded } from '../../components/Bounded'

const Image = ({ slice }) => {
  const image = slice.primary.image

  return (
    <Bounded as='section' size={slice.variation === 'wide' ? 'widest' : 'base'}>
      <figure className='figure'>
        {prismicH.isFilled.image(image) && (
          <div classNamve='image'>
            <PrismicNextImage field={image} layout='responsive' />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className='figcaption'>
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  )
}

export default Image
