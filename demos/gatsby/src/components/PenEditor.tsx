import React, { useState, useMemo } from 'react'
import { Penpad } from '../../../../packages/penpad/src/index'
import CSS from './Embedded.module.css'
import useDebounce from '../utilities/useDebounce'
import { Controlled as CodeMirror } from 'react-codemirror2'

// CodeMirror stuff
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
// @ts-ignore
import 'codemirror/mode/xml/xml'
// @ts-ignore
import 'codemirror/mode/jsx/jsx'

// This needs require(), doesn't work with import
// @ts-ignore
const Babel = require('@babel/standalone')

const SRC = `const specimens = {
  Button: {
    render: () => <button>Hello!</button>,
    description: 'This is a very important button'
  },
  'Button/disabled': {
    render: () => <button disabled>Boo</button>,
    description: "Can't touch this"
  }
}

const Demo = () => {
  return <Penpad ui={{ isEmbedded: true }} specimens={specimens} />
}`

const PenEditor = () => {
  const [source, setSource] = useState(SRC)

  // Don't compile until 500ms of no changes
  const debouncedSource = useDebounce(source, 500)

  // Compile
  const [error, compiled] = useMemo(() => {
    try {
      const code = Babel.transform(debouncedSource, {
        presets: ['es2015', 'react']
      }).code
      return [null, code]
    } catch (error) {
      return [error, null]
    }
  }, [debouncedSource])

  return (
    <div className={CSS.root}>
      <div className={CSS.codepane}>
        <div className={CSS.titlebar}>Demo.js</div>
        {error ? <div className={CSS.error}>Error: {error.message}</div> : null}
        <CodeMirror
          value={source}
          className={CSS.codemirror}
          options={{ mode: 'jsx', lineNumbers: true, viewportMargin: Infinity }}
          onBeforeChange={(editor, data, value) => {
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

const DemoResult = ({ code }) => {
  // Store the last working state
  const [lastKnown, setLastKnown] = useState(null)

  // Memoize the evaluation of the code, so there won't be a need to
  // re-evaluate it if ti hasn't changed.
  const jsx = useMemo(() => {
    /* eslint-disable no-new-func */
    const fn = new Function('React', 'Penpad', `${code}; return Demo`)
    try {
      const Component = fn(React, Penpad)
      const jsx = <Component />
      setLastKnown(jsx)
      return jsx
    } catch (e) {}
  }, [code])

  if (jsx) {
    return jsx
  } else {
    return lastKnown || null
  }
}
export default PenEditor
