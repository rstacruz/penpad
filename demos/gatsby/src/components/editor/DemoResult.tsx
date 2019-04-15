import React, { useMemo, useState } from 'react'
import {
  Page,
  Penpad,
  Specimen
} from '../../../../../packages/penpad/src/index'

/**
 * A shim for Penpad that forces it to be embedded.
 */

const EmbeddedPenpad = ({ children }: { children: React.ReactNode }) => {
  return <Penpad ui={{ isEmbedded: true }}>{children}</Penpad>
}

const DemoResult = ({ code }: { code: string | null }) => {
  // Store the last working state
  const [lastKnown, setLastKnown] = useState<JSX.Element | null>(null)

  // Memoize the evaluation of the code, so there won't be a need to
  // re-evaluate it if ti hasn't changed.
  const jsx = useMemo(() => {
    /* eslint-disable no-new-func */
    const fn = new Function(
      'React',
      'Penpad',
      'Specimen',
      'Page',
      `${code}; return Demo`
    )
    try {
      const DemoComponent = fn(React, EmbeddedPenpad, Specimen, Page)

      // We can use <DemoComponent> here, but this will reduce flickering
      const newJsx = DemoComponent()
      setLastKnown(newJsx)
      return newJsx
    } catch (e) {
      return
    }
  }, [code])

  if (jsx) {
    return jsx
  } else {
    return lastKnown || null
  }
}

export default DemoResult
