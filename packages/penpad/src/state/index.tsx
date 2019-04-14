import React, { useContext, useState, useEffect, useMemo } from 'react'
import { Config, State } from '../types'
import getInitialState from './getInitialState'
import getActions from './actions'

/**
 * The context to be used in useAppContext
 */

const Context = React.createContext<{
  state: State | null
  actions: Actions | null
}>({ state: null, actions: null })

/**
 * Context provider
 */

const AppProvider = Context.Provider

/**
 * The main hook used to manage the state (`state`, `setState`).
 */

const useAppState = (props: Partial<Config>) => {
  const [state, setState] = useState<State>(getInitialState())

  // The actions
  // (No need to rebuild the whole actions object except on first load)
  const actions = useMemo(() => getActions(setState), [setState])

  useEffect(() => {
    actions.mergeUiConfig(props.ui)
  }, [props.ui])

  useEffect(() => {
    actions.setSpecimens(props.specimens)
  }, [props.specimens])

  useEffect(() => {
    actions.setPages(props.pages)
  }, [props.pages])

  return { state, actions }
}

/**
 * Pick up what's given in AppProvider
 */

const useAppContext = () => {
  return useContext(Context)
}

/* Actions type */
export type Actions = ReturnType<typeof useAppState>['actions']
export { useAppState, useAppContext, AppProvider, Context }
