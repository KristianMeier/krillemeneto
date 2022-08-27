import Head from 'next/head'
import { PrismicLink, PrismicText, SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'
import { Layout } from '../../components/Layout'
import { Bounded } from '../../components/Bounded'
import { Heading } from '../../components/Heading'
import { HorizontalDivider } from '../../components/HorizontalDivider'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const LatestArticle = ({ article }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  )

  return (
    <li>
      <h1 className='latestarticle-header'>
        <PrismicLink document={article}>
          <PrismicText field={article.data.title} />
        </PrismicLink>
      </h1>
      <p className='latestarticle-paragraph'>{dateFormatter.format(date)}</p>
    </li>
  )
}

const Article = ({ article, latestArticles, navigation, settings }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  )

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(article.data.title)} |{' '}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <Bounded>
        <PrismicLink href='/' className='article-link'>
          &larr; Back to articles
        </PrismicLink>
      </Bounded>
      <article>
        <Bounded className='article-head'>
          <h1 className='article-title'>
            <PrismicText field={article.data.title} />
          </h1>
          <p className='article-subtitel'>{dateFormatter.format(date)}</p>
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
      {latestArticles.length > 0 && (
        <Bounded>
          <div className='article-endsection'>
            <HorizontalDivider />
            <div className='article-endsection-width'>
              <Heading size='2xl' className='article-lastarticles'>
                Latest articles
              </Heading>
              <ul className='article-lastarticles-grid'>
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Layout>
  )
}

export default Article

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const article = await client.getByUID('article', params.uid)
  const latestArticles = await client.getAllByType('article', {
    limit: 3,
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
  const navigation = await client.getSingle('navigation')
  const settings = await client.getSingle('settings')

  return {
    props: {
      article,
      latestArticles,
      navigation,
      settings,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const articles = await client.getAllByType('article')

  return {
    paths: articles.map((article) => prismicH.asLink(article, linkResolver)),
    fallback: false,
  }
}
