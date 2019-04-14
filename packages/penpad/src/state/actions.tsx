import { State, Pages, Specimens } from '../types'

type SetState = (callback: (state: State) => State) => any

const getActions = (setState: SetState) => ({
  /** Navigate to a given specimen */
  setActiveSpecimen(specimenId: string) {
    setState(state => ({
      ...state,
      activeView: {
        type: 'specimen',
        specimenId
      }
    }))
  },

  /** Navigate to a given page */
  setActivePage(pageId: string) {
    setState(state => ({
      ...state,
      activeView: {
        type: 'page',
        pageId
      }
    }))
  },

  /** Navigate to specimens area */
  navToSpecimens() {
    setState(state => ({ ...state, activeView: { type: 'specimen' } }))
  },

  /** Navigate to docs area */
  navToDocs() {
    setState(state => {
      // First page
      const pageId = Object.keys(state.pages || {})[0]
      return { ...state, activeView: { type: 'page', pageId } }
    })
  },

  /** Resize for responsive mode */
  setFrameWidth(width: number | null) {
    setState(state => ({
      ...state,
      specimenView: { ...state.specimenView, frameWidth: width }
    }))
  },

  setPages(pages: Pages) {
    setState(state => ({ ...state, pages }))
  },

  setSpecimens(specimens: Specimens) {
    setState(state => ({ ...state, specimens }))
  },

  mergeUiConfig(conf: Partial<State['uiConfig']>) {
    setState(state => ({ ...state, uiConfig: { ...state.uiConfig, conf } }))
  },

  /** Dangerous passthru for plugins to use */
  __setState__: setState
})

export default getActions
