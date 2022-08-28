import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'

import { Bounded } from '../../components/Bounded'

const Text = ({ slice }) => {
  return (
    <Bounded as='section'>
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className='text-text'>
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  )
}

export default Text
