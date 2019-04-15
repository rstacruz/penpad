import { Specimen, ReactSpecimen } from '../types'

/**
 * Check if a given Specimen is a React Specimen
 */

function isReactSpecimen(specimen: Specimen): specimen is ReactSpecimen {
  return !('type' in specimen) && 'render' in specimen
}

export default isReactSpecimen
