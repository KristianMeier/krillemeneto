import React from 'react'
import { Bounded } from '../../components/Bounded'
import { PrismicRichText } from '@prismicio/react'

const data = [
  {
    id: 1,
    name: 'Billede',
    age: 29,
    image: '/images/bank.png',
  },
  {
    id: 2,
    name: 'Billede',
    image: '/images/clock.png',
  },
  {
    id: 3,
    name: 'Billede',
    image: '/images/graph.png',
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
