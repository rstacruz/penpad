import React from 'react'
import { mdx } from 'mdx.macro'
import {
  Penpad,
  combineContext
} from '../../../../packages/penpad/dist/penpad.esm.js'

const specimens = combineContext(
  require.context('../', true, /\.specimens\.(jsx?|tsx?)$/)
)

const PP = mdx`
  # Hello

  This is a page.
`

const pages = {
  sup: () => <PP />
}

const Page = () => {
  return (
    <Penpad ui={{ title: 'Penpad demo' }} pages={pages} specimens={specimens} />
  )
}

export default Page
