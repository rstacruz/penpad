import { Pages, Specimens } from './Config'

/**
 * Global app state
 */

export interface State {
  /** Current view that is to be shown. */
  activeView:
    | {
        type: 'specimen'
        specimenId?: string
      }
    | {
        type: 'page'
        pageId?: string
      }

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
    title: string
  }
}
