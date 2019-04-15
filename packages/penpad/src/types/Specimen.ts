import { Component } from './Component'

export interface Specimen {
  id: string

  /**
   * The React component to be rendered in the view.
   *
   * This comes in the form of a tuple of `[Component, props]` because, when
   * reusing the same `Component` (eg, switching from specimen to specimen), it
   * will make it so that the Component instance isn't destroyed.
   *
   * This makes the experience flicker-free.
   */

  view: [React.FunctionComponent<any>, any]

  /** Source code for the source code panel */
  getCode?: () => string

  /** Description for the description panel */
  description?: string
}
