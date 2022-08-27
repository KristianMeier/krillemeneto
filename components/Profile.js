import * as prismicH from '@prismicio/helpers'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { Heading } from './Heading'

export const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className='px-4'>
      <div className='grid max-w-lg grid-cols-1 justify-items-center gap-8'>
        <PrismicLink href='/' tabIndex='-1'>
          <div className='relative h-40 w-40 overflow-hidden rounded-full bg-slate-300'>
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                layout='fill'
                className='object-cover'
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className='grid grid-cols-1 gap-2 text-center'>
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href='/'>
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className='font-serif text-2xl italic leading-normal tracking-tight text-slate-500'>
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
