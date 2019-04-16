import React, { useEffect } from 'react'
import { useAppContext } from 'penpad'

/**
 * Logger plugin to be attached to <Penpad />
 */

export const LoggerPlugin = () => {
  const { state, actions } = useAppContext()

  useEffect(() => {
    // actions.addPanel(LoggerPanel)
  }, [])

  return null
}

/**
 * Panel UI
 */

const LoggerPanel = () => {
  return <div>I'm the logger pannel</div>
}

/**
 * React hook
 */

export const useLogger = () => {
  const { state, actions } = useAppContext()

  return () => {
    console.log('logger')
  }
}

/**
 * Use logger render props
 */

export const UseLogger = ({ children }: any) => {
  const log = useLogger()
  return children({ log })
}

export default LoggerPlugin
