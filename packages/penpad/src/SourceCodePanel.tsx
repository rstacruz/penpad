import cn from 'classnames'
import toString from 'jsx-to-string'
import React from 'react'
import CSS from './SourceCodePanel.module.css'
import { Specimen } from './types'
import Util from './utils.module.css'

interface Props {
  specimen: Specimen
}

interface VProps {
  code: string
}

const SourceCodePanel = (props: Props) => {
  const { specimen } = props

  if ('getCode' in specimen) {
    const code = specimen.getCode()
    return <SourceCodePanelView code={code} />
  } else {
    return null
  }
}

const SourceCodePanelView = (props: VProps) => {
  const { code } = props

  return (
    <div className={CSS.root}>
      <div className={CSS.header}>
        <h3 className={CSS.title}>Source code</h3>
      </div>
      <div className={CSS.body}>
        <textarea
          spellCheck={false}
          className={cn(Util.textarea)}
          rows={10}
          value={code}
          readOnly
        />
      </div>
    </div>
  )
}

export default SourceCodePanel
