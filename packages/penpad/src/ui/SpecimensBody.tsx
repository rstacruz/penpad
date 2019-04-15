import React from 'react'
import CSS from './PenpadUI.module.css'
import ErrorCatcher from '../utils/ErrorCatcher'
import SpecimenNavigation from '../SpecimenNavigation'
import SpecimenPanels from '../SpecimenPanels'
import ReactSpecimenView from '../ReactSpecimenView'
import { useAppContext } from '../state'
import { Specimen, State } from '../types'
import MultiSpecimenViewer from './MultiSpecimenViewer'

/**
 * The body to be shown for specimens view
 */

const SpecimensBody = ({
  specimen,
  specimenId
}: {
  specimen: Specimen | null
  specimenId: string | null
}) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <></>

  const { specimens } = state

  return (
    <>
      {/* Main area */}
      <main className={CSS.main}>
        {specimen ? (
          <ErrorCatcher>
            <MultiSpecimenViewer {...{ specimen }} />
          </ErrorCatcher>
        ) : null}
      </main>

      {/* Left */}
      <aside className={CSS.sidebar}>
        {specimens ? <SpecimenNavigation /> : null}
      </aside>

      {/* Right */}
      <aside className={CSS.panels}>
        {specimen && specimenId ? (
          <SpecimenPanels {...{ specimen, id: specimenId }} key={specimenId} />
        ) : null}
      </aside>
    </>
  )
}

export default SpecimensBody
