import cn from 'classnames'
import React from 'react'
import { Meta, Title } from 'react-simple-head'
import { useAppContext } from '../state'
import '../styles/reset.module.css'
import DocsBody from './DocsBody'
import CSS from './PenpadUI.module.css'
import SpecimensBody from './SpecimensBody'
import TitleBar from './TitleBar'

/**
 * The main UI. I'm a consumer of PenpadProvider
 */

const PenpadUI = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) {
    throw new Error('PenpadUI needs to be placed inside a PenpadProvider')
  }

  const { uiConfig } = state
  const { title, isEmbedded } = uiConfig
  const { activeView, specimens } = state

  // 'specimen' or 'page', depending on what's selected on top.
  const viewType = activeView.type

  // The active specimen
  const specimenId =
    (activeView.type === 'specimen' && activeView.specimenId) || null

  // The specimen object
  const specimen = (specimenId && specimens && specimens[specimenId]) || null

  return (
    <x-penpad-ui>
      <div
        className={cn(CSS.root, {
          [CSS.isFullscreen]: !isEmbedded,
          [CSS.isEmbedded]: isEmbedded
        })}
      >
        {/* Meta tags */}
        <Title title={title} />
        <Meta name='viewport' content='width=1200px' />
        <Meta name='robots' content='noindex' />

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
    </x-penpad-ui>
  )
}

/*
 * Export
 */

export default PenpadUI
