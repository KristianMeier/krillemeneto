import { PrismicLink } from '@prismicio/react'
import { SignUpForm } from './SignUpForm'

import { Bounded } from './Bounded'
import { HorizontalDivider } from './HorizontalDivider'

export const Footer = ({ withSignUpForm = true, settings }) => {
  return (
    <Bounded as='footer'>
      <div className='footer'>
        <HorizontalDivider />
        {withSignUpForm && <SignUpForm settings={settings} />}
        <div className='footer-buttom-text'>
          Proudly published using{' '}
          <PrismicLink href='https://prismic.io' className='text-slate-700'>
            Prismic
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  )
}
