import * as prismicH from '@prismicio/helpers'
import { PrismicText } from '@prismicio/react'

import { Bounded } from '../../components/Bounded'

const Quote = ({ slice }) => {
  return (
    <Bounded as='section' size='wide'>
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <div className='quote'>
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
    </Bounded>
  )
}

export default Quote
