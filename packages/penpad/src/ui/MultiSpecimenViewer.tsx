import React from 'react'
import { Specimen } from '../types'

interface Props {
  specimen: Specimen
}

/**
 * Viewer for specimens.
 *
 * It delegates to other specimen viewers (eg, `ReactSpecimenView`)
 */

const MultiSpecimenViewer = (props: Props) => {
  const { specimen } = props
  const { View } = specimen
  return <View />
}

export default MultiSpecimenViewer
