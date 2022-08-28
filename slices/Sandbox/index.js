import React from 'react'
import { Bounded } from '../../components/Bounded'
import { PrismicRichText } from '@prismicio/react'

const data = [
  {
    id: 1,
    name: 'Billede',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Billede',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Billede',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
]

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image } = person
        return (
          <article key={id}>
            <h4 className='sandbox-text'>
              {name} {id}
            </h4>
            <img className='sandbox-picture' src={image} alt={name} />
          </article>
        )
      })}
    </>
  )
}

// Der skal reloades, hvis data-array ændres. Det er ikke dynamisk. Nok SSR.

const Sandbox = ({ slice }) => {
  return (
    <Bounded as='section' size='small'>
      <section className='sandbox-container'>
        <PrismicRichText field={slice.primary.title} />
        <List people={data} />
      </section>
      <hr className='sandbox-hr' />
    </Bounded>
  )
}

export default Sandbox
