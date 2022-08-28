import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Bounded } from '../../components/Bounded'

const Overskrift = ({ slice }) => {
  return (
    <Bounded as='section' size='wide'>
      {/* <PrismicRichText field={slice.primary.title} /> */}
    </Bounded>
  )
}

export default Overskrift
