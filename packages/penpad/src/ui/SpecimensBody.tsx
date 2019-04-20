import React from 'react'
import { Title } from 'react-simple-head'
import ReactSpecimenView from '../ReactSpecimenView'
import SpecimenNavigation from '../SpecimenNavigation'
import SpecimenPanels from '../SpecimenPanels'
import { useAppContext } from '../state'
import { Specimen, State } from '../types'
import ErrorCatcher from '../utils/ErrorCatcher'
import MultiSpecimenViewer from './MultiSpecimenViewer'
import CSS from './PenpadUI.module.css'

/**
 * The body to be shown for specimens view
 */

const SpecimensBody = ({ specimen }: { specimen: Specimen | null }) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <></>

  const { specimens } = state

  return (
    <>
      {specimen && specimen.id && !state.ui.isEmbedded ? (
        <Title title={specimen.id} />
      ) : null}

      {/* Main area */}
      <main className={CSS.main}>
        {specimen && specimen.id ? (
          <ErrorCatcher resetKey={specimen && specimen.id}>
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
        {specimen && specimen.id ? (
          <SpecimenPanels
            {...{ specimen, id: specimen.id }}
            key={specimen.id}
          />
        ) : null}
      </aside>
    </>
  )
}

export default SpecimensBody
