import { Page, Penpad as TruePenpad, Specimen } from 'penpad'
import React, { useMemo, useState } from 'react'
import useDebounce from '../../utilities/useDebounce'
import CSS from '../Embedded.module.css'
import CodeMirror from './CodeMirror'
import DemoResult from './DemoResult'
import useBabel from './useBabel'

/**
 * Properties
 */

export interface Props {
  code: string
  codeTitle?: string
  height?: number
}

/**
 * Editor and demo
 */

const Editor = (props: Props) => {
  const [source, setSource] = useState(props.code)

  // Don't compile until 500ms of no changes
  const debouncedSource = useDebounce(source, 500)

  // Compile using Babel when changed
  const [error, compiled] = useBabel(debouncedSource)

  return (
    <div className={CSS.root}>
      <div className={CSS.codepane}>
        <div className={CSS.titlebar}>{props.codeTitle}</div>
        {error ? <div className={CSS.error}>Error: {error.message}</div> : null}
        <CodeMirror
          value={source}
          className={CSS.codemirror}
          options={{ mode: 'jsx' }}
          onBeforeChange={(editor: any, data: any, value: string) => {
            setSource(value)
          }}
        />
      </div>

      <div className={CSS.demopane}>
        <DemoResult code={compiled} />
      </div>
    </div>
  )
}

Editor.defaultProps = {
  height: 400,
  codeTitle: 'Demo.js'
}

export default Editor
