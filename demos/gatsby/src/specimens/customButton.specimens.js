import React from 'react'
import { Specimen } from '@penpad/core'

const CustomButton = ({ children }) => {
  return <button data-custom>{children}</button>
}

export default () => (
  <>
    <Specimen id='CustomButton'>
      <CustomButton>Hello</CustomButton>
    </Specimen>
  </>
)
