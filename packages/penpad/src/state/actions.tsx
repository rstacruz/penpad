import {
  Block,
  ComponentTuple,
  Pages,
  Specimen,
  Specimens,
  State
} from '../types'

type SetState = (callback: (state: State) => State) => any

const getActions = (setState: SetState) => {
  const actions = {
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
      setState(state => ({
        ...state,
        uiConfig: { ...state.uiConfig, ...conf }
      }))
    },

    addSpecimen(specimen: Specimen) {
      if (!specimen.id) {
        throw new Error(`addSpecimen: 'id' is required`)
      }

      setState(state => ({
        ...state,
        specimens: {
          ...state.specimens,
          [specimen.id]: specimen
        }
      }))

      return () => {
        actions.removeSpecimen(specimen.id)
      }
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

    /**
     * Returns an undo function (useful for useEffect).
     */

    addBlock({ domain, id, priority, view }: Block) {
      setState(state => {
        const blocksObj = state.blocks || {}
        const domainObj = blocksObj[domain] || {}
        const priorityObj = domainObj[priority] || {}

        return {
          ...state,
          blocks: {
            ...blocksObj,
            [domain]: {
              // 'panels'
              ...domainObj,
              [priority]: { /* '30' */ ...priorityObj, [id]: view }
            }
          }
        }
      })

      // Undo function for useState()
      const undo = () => {
        actions.addBlock({ domain, id, priority, view: null })
      }

      return undo
    },

    /**
     * Sets custom data. Useful for plugins.
     *
     * @example
     *     setData('myplugin', (dstate) => {
     *       return { ...dstate, hello: 'world' }
     *     })
     *
     *     state.data.myplugin.hello
     *     // => 'world'
     */

    setData(domain: string, update: (oldData: any) => any) {
      setState(state => {
        const data: any = (state && state.data) || {}
        const value = (data && data[domain]) || {}

        return {
          ...state,
          data: { ...data, [domain]: update(value) }
        }
      })
    },

    /** Dangerous passthru for plugins to use */
    __setState__: setState
  }

  return actions
}

export default getActions
