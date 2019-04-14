import { Component } from './Component'

export interface Specimen {
  /**
   * The function, when called, will render the React component to be
   * displayed. Can be a functional React component.
   */
  render: Component

  /** The description to be shown */
  description?: React.ReactNode

  width?: string | number
  background?: string
  padding?: string | number
}
