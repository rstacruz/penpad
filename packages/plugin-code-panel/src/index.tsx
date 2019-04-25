import { AddBlockPlugin } from '@penpad/core'
import React from 'react'
import SourceCodePanel from './SourceCodePanel'

const CodePanelPlugin = () => {
  return (
    <AddBlockPlugin
      block={() => ({
        domain: 'panels',
        priority: 50,
        id: 'source-code',
        view: [SourceCodePanel, {}]
      })}
    />
  )
}

export { CodePanelPlugin }
export default CodePanelPlugin
