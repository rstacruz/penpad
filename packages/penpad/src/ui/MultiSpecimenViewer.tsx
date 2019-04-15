import React from 'react'
import ReactSpecimenView from '../ReactSpecimenView'
import isReactSpecimen from '../helpers/isReactSpecimen'
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
  const { specimen, ...otherProps } = props

  if (isReactSpecimen(specimen)) {
    return <ReactSpecimenView specimen={specimen} {...otherProps} />
    // } else if (specimen.type === 'color') {
    //   return <span>Color</span>
  } else {
    return <span>No viewer for this specimen type... yet!</span>
  }
}

export default MultiSpecimenViewer
