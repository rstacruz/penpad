import React, { useEffect } from 'react'
import { useAppContext, BasePanel } from '@rstacruz/penpad'
import { Actions } from '@rstacruz/penpad/src/types'

/**
 * Logger plugin to be attached to <Penpad />
 */

export const LoggerPlugin = () => {
  const { state, actions } = useAppContext()

  useEffect(() => {
    if (!state || !actions) return
    return actions.addBlock({
      domain: 'panels',
      priority: 30,
      id: 'logger',
      view: [LoggerPanel, {}]
    })
  }, [])

  // Clear logs when navigating
  useEffect(() => {
    clearLogEntries(actions)
  }, [state && state.activeView])

  return null
}

function clearLogEntries(actions: Actions | null) {
  if (!actions || !actions.setData) return
  actions.setData('logger', (state: LoggerState) => {
    return { ...state, logs: [] }
  })
}

function pushLogEntry(actions: Actions | null, message: Message) {
  if (!actions || !actions.setData) return
  actions.setData('logger', (state: LoggerState) => {
    const logs = (state && state.logs) || []
    return { ...state, logs: [...logs, message] }
  })
}

/**
 * Panel UI
 */

const LoggerPanel = () => {
  const { state } = useAppContext()
  if (!state) return null

  const data: LoggerState = (state && state.data && state.data.logger) || {}
  const logs = data.logs || []

  return (
    <BasePanel title='Logs'>
      {logs.map((line: string, index: number) => (
        <div key={index}>{line}</div>
      ))}
    </BasePanel>
  )
}

/**
 * React hook
 */

export const useLogger = () => {
  const { actions } = useAppContext()
  if (!actions) return () => {}

  return (message: string) => {
    pushLogEntry(actions, message)
  }
}

/**
 * Use logger render props
 */

export const UseLogger = ({ children }: { children: Renderer }) => {
  const log = useLogger()
  return <>{children({ log })}</>
}

export type LoggerFunction = (...props: any[]) => any
export type Renderer = (props: { log: LoggerFunction }) => React.ReactNode
export type Message = string

interface LoggerState {
  logs?: Array<string>
}

export default LoggerPlugin
