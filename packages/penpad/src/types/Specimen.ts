import { Component } from './Component'

export interface ReactSpecimen {
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

export interface ColorList {
  [key: string]: string
}

export interface ColorSpecimen {
  type: 'color'
  colors: ColorList
  description?: React.ReactNode
}

export type Specimen = ReactSpecimen | ColorSpecimen
