import React from 'react'
import Editor from './editor/Editor'

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

const EmbeddedPage = () => {
  return (
    <div style={{ margin: '64px auto' }}>
      <p style={{ textAlign: 'center' }}>Anyway, here's Penpad</p>
      <Editor code={SRC} height={500} />
    </div>
  )
}

export default EmbeddedPage
