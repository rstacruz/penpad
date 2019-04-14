import { Config, State } from '../types'

/**
 * Returns the initial state for the store based on props.
 */

const getInitialState = (): State => {
  return {
    uiConfig: {
      title: 'Penpad',
      isEmbedded: false
    },
    activeView: { type: 'specimen' },
    specimens: {},
    pages: {},
    specimenView: {
      frameWidth: null
    }
  }
}

export default getInitialState
