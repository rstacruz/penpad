import React, { useMemo, useState } from 'react'
import {
  Page,
  Penpad as TruePenpad,
  Specimen
} from '../../../../../packages/penpad/src/index'
import useDebounce from '../../utilities/useDebounce'
import CSS from '../Embedded.module.css'
import CodeMirror from './CodeMirror'
import DemoResult from './DemoResult'
import useBabel from './useBabel'

const SRC = `const Demo = () => {
  return (
    <Penpad>
      <Specimen id='Button' description='A very important button'>
        <button>Hello!</button>
      </Specimen>

      <Specimen id='Button/disabled'>
        <button disabled>Oof</button>
      </Specimen>

      <Page id='home'>
        <h1>Welcome to Penpad!</h1>
        <p>This is a live demo of Penpad.</p>
      </Page>
    </Penpad>
  )
}`

const PenEditor = () => {
  const [source, setSource] = useState(SRC)

  // Don't compile until 500ms of no changes
  const debouncedSource = useDebounce(source, 500)

  // Compile using Babel when changed
  const [error, compiled] = useBabel(debouncedSource)

  return (
    <div className={CSS.root}>
      <div className={CSS.codepane}>
        <div className={CSS.titlebar}>Demo.js</div>
        {error ? <div className={CSS.error}>Error: {error.message}</div> : null}
        <CodeMirror
          value={source}
          className={CSS.codemirror}
          options={{
            mode: 'jsx'
            // lineNumbers: true
          }}
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

export default PenEditor
