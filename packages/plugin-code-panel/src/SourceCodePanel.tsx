import { BasePanel, useAppContext } from '@rstacruz/penpad'
import { Specimen, State } from '@rstacruz/penpad/src/types'
import Util from '@rstacruz/penpad/src/utils.module.css'
import React from 'react'

const SourceCodePanel = () => {
  const { state } = useAppContext()
  if (!state) return null

  const specimen = getActiveSpecimen(state)
  if (!specimen) return null

  if (typeof specimen.getCode === 'function') {
    const code = specimen.getCode()
    return <SourceCodePanelView code={code} />
  } else {
    return null
  }
}

const SourceCodePanelView = (props: { code: string }) => {
  const { code } = props

  return (
    <BasePanel title='Source code'>
      <textarea
        spellCheck={false}
        className={Util.textarea}
        rows={10}
        value={code}
        readOnly
      />
    </BasePanel>
  )
}

/**
 * Selector for getting the active specimen.
 * This can be contributed back to the core package selectors
 */

const getActiveSpecimen = (state: State) => {
  if (!state.activeView) return
  if (state.activeView.type !== 'specimen') return

  const id = state.activeView.specimenId
  if (!id) return

  return state && state.specimens && state.specimens[id]
}

/*
 * Export
 */

export default SourceCodePanel
