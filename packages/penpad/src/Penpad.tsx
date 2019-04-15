import React from 'react'
import { AppProvider, useAppState } from './state'
import { Config } from './types'
import PenpadUI from './ui/PenpadUI'

/**
 * The main component
 */

const Penpad = (props: Partial<Config>) => {
  return (
    <PenpadProvider {...props}>
      {props.children}
      <PenpadUI />
    </PenpadProvider>
  )
}

/**
 * Provider so that you can use Penpad's state
 */

const PenpadProvider = (props: Partial<Config>) => {
  const { state, actions } = useAppState(props)
  return <AppProvider value={{ state, actions }}>{props.children}</AppProvider>
}

/*
 * Export
 */

export default Penpad
