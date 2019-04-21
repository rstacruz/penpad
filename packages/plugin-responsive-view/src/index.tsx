import { BasePanel, useAppContext } from '@rstacruz/penpad'
import React, { useEffect } from 'react'
import ResponsiveResizePanel from './ResponsiveResizePanel'

const ResponsiveViewPlugin = () => {
  const { state, actions } = useAppContext()

  useEffect(() => {
    if (!state || !actions) return

    return actions.addBlock({
      domain: 'panels',
      priority: 20,
      id: 'responsive-view',
      view: [ResponsiveResizePanel, {}]
    })
  }, [])
  return null
}

export { ResponsiveViewPlugin }
export default ResponsiveViewPlugin
