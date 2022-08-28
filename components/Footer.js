import { PrismicLink } from '@prismicio/react'
import { SignUpForm } from './SignUpForm'

import { Bounded } from './Bounded'
import { HorizontalDivider } from './HorizontalDivider'

export const Footer = ({ withSignUpForm = true, settings }) => {
  return (
    <Bounded as='footer'>
      <div className='footer-container'>
        <HorizontalDivider />
        {/* {withSignUpForm && <SignUpForm settings={settings} />} */}
        <div className='footer-buttom-text'>
          Proudly published using{' '}
          <PrismicLink
            href='https://prismic.io'
            className='footer-published-prismic'
          >
            Prismic
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  )
}
