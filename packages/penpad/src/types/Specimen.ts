import { Component } from './Component'

export interface Specimen {
  /** The React component to be rendered in the view */
  View: React.FunctionComponent

  /** Source code for the source code panel */
  getCode?: () => string

  /** Description for the description panel */
  description?: string
}
