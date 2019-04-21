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

const CombineWebpackContext = ({ context }: { context: WebpackContext }) => {
  const list = context.keys().map((key: string) => {
    const Component = context(key).default
    if (!Component) return null
    return <Component key={key} />
  })

  return <>{list}</>
}

export default CombineWebpackContext
