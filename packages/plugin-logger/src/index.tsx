import { AddBlockPlugin, BasePanel, useAppContext } from '@rstacruz/penpad'
import { Actions } from '@rstacruz/penpad/src/types'
import React from 'react'

/**
 * Logger plugin to be attached to <Penpad />
 */

export const LoggerPlugin = () => {
  return (
    <AddBlockPlugin
      block={() => ({
        domain: 'panels',
        priority: 80,
        id: 'logger',
        view: [LoggerPanel, {}]
      })}
    />
  )
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
  logs?: string[]
}

export default LoggerPlugin
