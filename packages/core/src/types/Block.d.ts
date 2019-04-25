import { ComponentTuple } from './ComponentTuple'

export interface Block {
  /** Where the block is supposed to show up */
  domain: 'panels'

  /** Unique ID for the block; to be used with removePanel() */
  id: string

  /** Priority (1..100) to determine where it should show up */
  priority: number

  /** The React component to be rendered and its props */
  view: ComponentTuple | null
}
