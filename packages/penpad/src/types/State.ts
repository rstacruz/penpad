import { Pages, Specimens } from './Config'
import { BlockList } from './BlockList'

type ActiveView =
  | {
      type: 'specimen'
      specimenId?: string
    }
  | {
      type: 'page'
      pageId?: string
    }

/**
 * Global app state
 */

export interface State {
  /** Current view that is to be shown. */
  activeView: ActiveView

  /**
   * Specimens to display (may be 'null' if loading asynchronously).
   * Taken from Config props.
   */
  specimens: Specimens | null

  /**
   * Pages to display (may be 'null' if loading asynchronously).
   * Taken from Config props.
   */
  pages: Pages | null

  specimenView: {
    frameWidth: number | null
  }

  /**
   * UI configuration, taken from config
   */

  uiConfig: {
    /** Title shown in the titlebar */
    title: string

    /** If true, doesn't take over the entire screen */
    isEmbedded: boolean
  }

  blocks: {
    panels: BlockList
  }

  /**
   * Free-for-all state storage for all custom plugins
   */

  data: { [key: string]: any }
}
