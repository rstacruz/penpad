import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import CSS from './IndexPage.module.css'

import Layout from './Layout'

const IndexPage = () => {
  const description =
    'Penpad lets you create styleguides and component playgrounds any React project.'

  const title = 'React Penpad &ndash; Write and document your UI components'

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />

        <meta property='og:site_name' content='Penpad' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </Helmet>

      <section className={CSS.section}>
        <h1>Penpad</h1>
        <p>Write and document your UI components.</p>

        <div className={CSS.actions}>
          <Link to='/penpad' className={CSS.button}>
            Launch demo
          </Link>

          <Link to='/penpad-embedded' className={CSS.lowButton}>
            Try it in your browser
          </Link>

          <a href='https://github.com/rstacruz/penpad'>GitHub</a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
