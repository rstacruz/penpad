import React from 'react'
type Result = any

/**
 * A webpack context, given by `require.context(...)`.
 */

type WebpackContextFn = (id: string) => Result | { default?: Result }
interface WebpackContext extends WebpackContextFn {
  keys: () => string[]
}

/**
 * Loads all files from a Webpack context.
 * Assumes that all files export React components.
 */

const CombineWebpackContext = ({ context }) => {
  return context.keys().map(key => {
    const Component = context(key).default
    if (!Component) return null
    return <Component key={key} />
  })
}

export default CombineWebpackContext
