import React, { Suspense, lazy } from 'react'
import Editor, { Props } from './Editor'

const LazyEditor = (props: Props) => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Editor {...props} />
    </Suspense>
  )
}

export default LazyEditor
