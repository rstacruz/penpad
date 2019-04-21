import { BasePanel, useAppContext } from '@rstacruz/penpad'
import React, { useEffect } from 'react'

interface SpecimenProps {
  id: string
  colors: { [key: string]: string }
}

const ColorPlugin = () => {
  const { state, actions } = useAppContext()

  useEffect(() => {
    if (!state || !actions) return

    return actions.addBlock({
      domain: 'panels',
      priority: 30,
      id: 'logger',
      view: [ColorPanel, {}]
    })
  }, [])
  return null
}

/**
 * The panel to be shown on the right sidebar
 */

const ColorPanel = () => {
  return <BasePanel title='Colors'>colors go here</BasePanel>
}

const ColorSpecimen = (props: SpecimenProps) => {
  const { actions } = useAppContext()
  if (!actions) return null

  useEffect(() => {
    return actions.addSpecimen({
      id: props.id,
      view: [ColorSpecimenView, props]
    })
  }, [props.id])

  return null
}

/**
 * Specimen view
 */

const ColorSpecimenView = () => {
  return <span>I'm a specimen</span>
}

/*
 * Export
 */

export { ColorPlugin, ColorSpecimen }
export default ColorPlugin
