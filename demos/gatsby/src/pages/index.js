import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <p align='center' style={{ margin: '40vh auto' }}>
      <Link to='/penpad'>Launch penpad</Link>
    </p>
  </Layout>
)

export default IndexPage
