import * as prismicH from '@prismicio/helpers'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { Heading } from './Heading'

export const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className='profile-padding'>
      <div className='profile-grid'>
        <PrismicLink href='/' tabIndex='-1'>
          <div className='profile-picture'>
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                layout='fill'
                className='profile-picture-fit'
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className='profile-text-grid'>
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href='/'>
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className='profile-text'>
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
