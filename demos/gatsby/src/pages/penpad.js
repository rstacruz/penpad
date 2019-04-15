import React from 'react'
import { mdx } from 'mdx.macro'
import {
  Penpad,
  Specimen,
  Page,
  CombineWebpackContext
} from '../../../../packages/penpad/src/index'

// If running with 'rollup watch', use:
// '../../../../packages/penpad/dist/penpad.esm.js'

import 'bulma/css/bulma.css'

const specimens = require.context('../', true, /\.specimens\.(jsx?|tsx?)$/)

const PP = mdx`
  # Hello

  This is a page.
`

const PenpadPage = () => {
  return (
    <Penpad ui={{ title: 'Penpad demo' }}>
      <Page id='Home'>
        <PP />
      </Page>
      <Specimen id='MyButton'>
        <button>hey there</button>
      </Specimen>

      <CombineWebpackContext context={specimens} />
    </Penpad>
  )
}

export default PenpadPage
