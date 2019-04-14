import React from 'react'
import CSS from './Penpad.module.css'
import SpecimenNavigation from './SpecimenNavigation'
import SpecimenPanels from './SpecimenPanels'
import SpecimenView from './SpecimenView'
import { useAppContext } from './state'
import { Specimen, State } from './types'

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
  console.log('specimensbody', state)

  return (
    <>
      {/* Main area */}
      <main className={CSS.main}>
        {specimen ? <SpecimenView {...{ specimen }} /> : null}
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
