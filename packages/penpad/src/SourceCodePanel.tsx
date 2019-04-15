import cn from 'classnames'
import toString from 'jsx-to-string'
import React from 'react'
import CSS from './SourceCodePanel.module.css'
import Util from './utils.module.css'
import { Specimen, ReactSpecimen } from './types'
import isReactSpecimen from './helpers/isReactSpecimen'

interface Props {
  specimen: Specimen
}

interface AProps {
  specimen: Pick<ReactSpecimen, 'render'>
}

const SourceCodePanel = (props: Props) => {
  const { specimen } = props

  if (isReactSpecimen(specimen)) {
    return <SourceCodePanelActual specimen={specimen} />
  } else {
    return null
  }
}

const SourceCodePanelActual = (props: AProps) => {
  const { specimen } = props

  let code: string
  try {
    code = toString(specimen.render({}))
  } catch (e) {
    code = `/* Error: ${e.message} */`
  }

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
