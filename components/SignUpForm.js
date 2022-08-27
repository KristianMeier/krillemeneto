import { PrismicRichText, PrismicText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { Heading } from './Heading'

export const SignUpForm = ({ settings }) => {
  return (
    <div className='signupform-padding'>
      <form action='/api/sign-up' method='post' className='signupform-grid'>
        {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className='signupform-text'>
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }) => (
                  <Heading as='h2' className='signupform-heading'>
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  <p className='signupform-headingtwo'>{children}</p>
                ),
              }}
            />
          </div>
        )}
        <div className='emailsignup-grid'>
          <div className='emailsignup-position'>
            <label>
              <span className='only-screenreaders'>Email address</span>
              <input
                name='email'
                type='email'
                placeholder='jane.doe@example.com'
                required={true}
                className='emailsignup'
              />
            </label>
            <button type='submit' className='signupform-arrow'>
              <span className='only-screenreaders'>Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className='signupform-disclaimer'>
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
