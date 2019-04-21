import { CodePanelPlugin } from '@penpad/plugin-code-panel'
import { ResponsiveViewPlugin } from '@penpad/plugin-responsive-view'
import React from 'react'

const Recommended = () => {
  return (
    <>
      <ResponsiveViewPlugin />
      <CodePanelPlugin />
    </>
  )
}

export { Recommended }
export default Recommended
