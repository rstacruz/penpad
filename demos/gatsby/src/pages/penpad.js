import React from 'react'
import {
  Penpad,
  combineContext
} from '../../../../packages/penpad/src/index.tsx'

const specimens = combineContext(
  require.context('../', true, /\.specimens\.(jsx?|tsx?)$/)
)

const Page = () => {
  return <Penpad pages={{}} specimens={specimens} />
}

export default Page
