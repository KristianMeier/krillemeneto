import * as prismicH from '@prismicio/helpers'
import { PrismicLink, PrismicText } from '@prismicio/react'

import { Bounded } from './Bounded'
import { HorizontalDivider } from './HorizontalDivider'
import { Profile } from './Profile'

const NavItem = ({ children }) => {
  return <li className='nav-item'>{children}</li>
}

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}) => {
  return (
    <Bounded as='header'>
      <div className='header'>
        <nav>
          <ul className='header-nav'>
            <NavItem>
              <PrismicLink href='/'>
                <PrismicText field={navigation.data.homepageLabel} />
              </PrismicLink>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withProfile && (
          <Profile
            name={settings.data.name}
            description={settings.data.description}
            profilePicture={settings.data.profilePicture}
          />
        )}
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  )
}
