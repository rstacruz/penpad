import cn from 'classnames'
import toString from 'jsx-to-string'
import React from 'react'
import CSS from './SourceCodePanel.module.css'
import Util from './utils.module.css'
import { Specimen } from './types'

interface Props {
  specimen: Pick<Specimen, 'render'>
}

const SourceCodePanel = (props: Props) => {
  const { specimen } = props
  const code = toString(specimen.render())

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
