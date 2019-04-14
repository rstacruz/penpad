import React from 'react'
import Helmet from 'react-helmet'
import DocsBody from './DocsBody'
import CSS from './Penpad.module.css'
import SpecimensBody from './SpecimensBody'
import { AppProvider, useAppState, useAppContext } from './state'
import TitleBar from './TitleBar'
import { Config } from './types'

/**
 * The main component
 */

const Penpad = (props: Partial<Config>) => {
  return (
    <PenpadProvider {...props}>
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

/**
 * The main UI. I'm a consumer of PenpadProvider
 */

const PenpadUI = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) {
    throw new Error('PenpadUI needs to be placed inside a PenpadProvider')
  }

  const { title } = state.uiConfig
  const { activeView, specimens } = state

  // 'specimen' or 'page', depending on what's selected on top.
  const viewType = activeView.type

  // The active specimen
  const specimenId =
    (activeView.type === 'specimen' && activeView.specimenId) || null

  // The specimen object
  const specimen = (specimenId && specimens && specimens[specimenId]) || null

  return (
    <div className={CSS.root}>
      <Helmet>
        <title>{title}</title>
        <meta name='viewport' content='width=1200px' />
        <meta name='robots' content='noindex' />
      </Helmet>

      {/* Navigation */}
      <div className={CSS.topnav}>
        <div className={CSS.title}>
          <TitleBar />
        </div>
      </div>

      {/* Body */}
      <div className={CSS.body}>
        {viewType === 'specimen' ? (
          <SpecimensBody {...{ specimen, specimenId }} />
        ) : null}
        {viewType === 'page' ? <DocsBody /> : null}
      </div>
    </div>
  )
}

PenpadProvider.defaultProps = {
  ui: { title: 'Penpad' },
  pages: {},
  specimens: {}
}

/*
 * Export
 */

export default Penpad
