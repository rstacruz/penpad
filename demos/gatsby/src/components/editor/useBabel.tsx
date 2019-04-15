import { useMemo } from 'react'

// This needs require(), doesn't work with import.
/* tslint:disable */
// @ts-ignore
const Babel = require('@babel/standalone')
/* tslint:enable */

/**
 * Compiles a string using Babel.
 */

const useBabel = (source: string): [Error | null, string | null] => {
  const [error, compiled] = useMemo(() => {
    try {
      const code = Babel.transform(source, {
        presets: ['es2015', 'react']
      }).code
      return [null, code]
    } catch (error) {
      return [error, null]
    }
  }, [source])
  return [error, compiled]
}

export default useBabel
