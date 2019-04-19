import React from 'react'
import ResponsiveResizePanel from './ResponsiveResizePanel'
import SourceCodePanel from './SourceCodePanel'
import SpecimenDescriptionPanel from './SpecimenDescriptionPanel'
import { useAppContext } from './state'
import { Specimen } from './types'
import RenderBlocks from './ui/RenderBlocks'

interface Props {
  specimen: Specimen
  id: string
}

const SpecimenPanels = (props: Props) => {
  const { state, actions } = useAppContext()
  const { specimen, id } = props

  return (
    <>
      {specimen.description ? (
        <SpecimenDescriptionPanel {...{ specimen }} />
      ) : null}
      <ResponsiveResizePanel />
      <SourceCodePanel specimen={specimen} key={id} />

      {/* Render custom panels */}
      {state && state.blocks && state.blocks.panels ? (
        <RenderBlocks blocks={state.blocks.panels} />
      ) : null}
    </>
  )
}

export default SpecimenPanels
