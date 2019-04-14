import { Config, State } from '../types'

/**
 * Returns the initial state for the store based on props.
 */

const getInitialState = (props: Config): State => {
  return {
    uiConfig: {
      title: (props.ui && props.ui.title) || 'Penpad'
    },
    activeView: { type: 'specimen' },
    specimens: props.specimens || {},
    pages: props.pages || {},
    specimenView: {
      frameWidth: null
    }
  }
}

export default getInitialState
