import Recommended from '@penpad/preset-recommended'
import { CombineWebpackContext, Page, Penpad, Specimen } from '@penpad/core'
import { mdx } from 'mdx.macro'
import React from 'react'

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

// @ts-ignore It's a Webpack thing
const specimens = require.context('../../', true, /\.specimens\.(jsx?|tsx?)$/)

const PenpadPage = () => {
  return (
    <Penpad ui={{ title: 'Penpad demo' }}>
      <Recommended />

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

      <Specimen id='DontClickMe'>
        <Oops />
      </Specimen>
    </Penpad>
  )
}

const Oops = () => {
  throw new Error('This error was raised deliberately as a test!')
}

export default PenpadPage
