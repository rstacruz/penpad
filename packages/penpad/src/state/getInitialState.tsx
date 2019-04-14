import { Config, State } from '../types'

/**
 * Returns the initial state for the store based on props.
 */

const getInitialState = (props: Partial<Config>): State => {
  return {
    uiConfig: {
      title: (props.ui && props.ui.title) || 'Penpad'
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
