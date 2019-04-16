import cn from 'classnames'
import React from 'react'
import { Specimen } from './types'
import Util from './utils.module.css'
import BasePanel from './BasePanel'

interface Props {
  specimen: Specimen
}

const SourceCodePanel = (props: Props) => {
  const { specimen } = props

  if (typeof specimen.getCode === 'function') {
    const code = specimen.getCode()
    return <SourceCodePanelView code={code} />
  } else {
    return null
  }
}

const SourceCodePanelView = (props: { code: string }) => {
  const { code } = props

  return (
    <BasePanel title='Source code'>
      <textarea
        spellCheck={false}
        className={cn(Util.textarea)}
        rows={10}
        value={code}
        readOnly
      />
    </BasePanel>
  )
}

export default SourceCodePanel
