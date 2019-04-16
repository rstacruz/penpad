import { ComponentTuple } from './ComponentTuple'

/**
 * A list of 'blocks', usually for things like custom panels.
 * Allow null here, because it's an easy way to clear out an existing block.
 */

export interface BlockList {
  [priority: string]: {
    [id: string]: ComponentTuple | null
  }
}
