import React from 'react'
import { mdx } from 'mdx.macro'
import {
  Penpad,
  Specimen,
  Page,
  CombineWebpackContext
} from '../../../../packages/penpad/src/index'

import 'bulma/css/bulma.css'

const Pages = {
  Home: mdx`
  # Hello

  This is a demo of Penpad.
  `,
  About: mdx`
  # About

  Again, This is a demo of Penpad.
  `
}

const specimens = require.context('../', true, /\.specimens\.(jsx?|tsx?)$/)

const PenpadPage = () => {
  return (
    <Penpad ui={{ title: 'Penpad demo' }}>
      <Page id='Home'>
        <Pages.Home />
      </Page>

      <Page id='About'>
        <Pages.About />
      </Page>

      <Specimen id='MyButton'>
        <button>hey there</button>
      </Specimen>

      <CombineWebpackContext context={specimens} />
    </Penpad>
  )
}

export default PenpadPage
