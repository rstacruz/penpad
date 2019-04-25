import React from 'react'
import { Specimen } from '@penpad/core'

export default () => (
  <>
    <Specimen
      id='Button'
      padding={8}
      description={`This is a button. It's very important, guard it with your life.`}
    >
      <button>Hello</button>
    </Specimen>

    <Specimen
      id='Button/disabled'
      padding={8}
      description={`This is a button. It's very important, guard it with your life.`}
    >
      <button disabled>Hello</button>
    </Specimen>
  </>
)
