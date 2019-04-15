import React from 'react'
import { Link } from 'gatsby'
import CSS from './IndexPage.module.css'

import Layout from './Layout'

const IndexPage = () => (
  <Layout>
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
      </div>
    </section>
  </Layout>
)

export default IndexPage
