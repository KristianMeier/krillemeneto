import Head from 'next/head'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { Layout } from '../components/Layout'
import { Bounded } from '../components/Bounded'
import { Heading } from '../components/Heading'
import Overskrift from '../slices/Overskrift'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === 'image')

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image
  }
}

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === 'text')
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(' ')

  const excerpt = text.substring(0, 300)

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
  } else {
    return excerpt
  }
}

const Article = ({ article }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices)
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  )
  const excerpt = getExcerpt(article.data.slices)

  return (
    <div>
      <Overskrift />
      <li className='articlepreview'>
        <PrismicLink document={article} tabIndex='-1'>
          <div className='articlepreview-image'>
            {prismicH.isFilled.image(featuredImage) && (
              <PrismicNextImage
                field={featuredImage}
                layout='fill'
                className='articlepreview-imagefit'
              />
            )}
          </div>
        </PrismicLink>
        <div className='articlepreview-title'>
          <Heading as='h2'>
            <PrismicLink document={article}>
              <PrismicText field={article.data.title} />
            </PrismicLink>
          </Heading>
          <p className='articlepreview-date'>{dateFormatter.format(date)}</p>
          {excerpt && <p className='articlepreview-content'>{excerpt}</p>}
        </div>
      </li>
    </div>
  )
}

const Index = ({ articles, navigation, settings }) => {
  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <Bounded size='widest'>
        <div className='frontpage-titel'>Kundehistorier</div>
        <ul className='articlepreview-grid'>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
        {console.log(articles)}
      </Bounded>
    </Layout>
  )
}

export default Index

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const articles = await client.getAllByType('article', {
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
  const navigation = await client.getSingle('navigation')
  const settings = await client.getSingle('settings')

  return {
    props: {
      articles,
      navigation,
      settings,
    },
  }
}
