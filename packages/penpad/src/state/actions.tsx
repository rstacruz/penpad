import { Pages, Specimen, Specimens, State } from '../types'

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
    setState(state => ({ ...state, uiConfig: { ...state.uiConfig, ...conf } }))
  },

  addSpecimen(specimen: Specimen) {
    setState(state => ({
      ...state,
      specimens: {
        ...state.specimens,
        [specimen.id]: specimen
      }
    }))
  },

  removeSpecimen(id: string) {
    setState(state => {
      const { specimens } = state
      if (!specimens) return state

      const { [id]: _, ...otherSpecimens } = specimens
      return {
        ...state,
        specimens: otherSpecimens
      }
    })
  },

  addPage({
    id,
    view
  }: {
    id: string
    view: [React.FunctionComponent<any>, any]
  }) {
    setState(state => ({
      ...state,
      pages: { ...state.pages, [id]: { id, view } }
    }))
  },

  removePage(id: string) {
    setState(state => {
      const { pages } = state
      if (!pages) return state

      const { [id]: _, ...others } = pages
      return { ...state, pages: others }
    })
  },

  /** Dangerous passthru for plugins to use */
  __setState__: setState
})

export default getActions
