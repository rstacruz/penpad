import { AddBlockPlugin } from '@penpad/core'
import React from 'react'
import ResponsiveResizePanel from './ResponsiveResizePanel'

const ResponsiveViewPlugin = () => {
  return (
    <AddBlockPlugin
      block={() => ({
        domain: 'panels',
        priority: 20,
        id: 'responsive-view',
        view: [ResponsiveResizePanel, {}]
      })}
    />
  )
}

export { ResponsiveViewPlugin }
export default ResponsiveViewPlugin
