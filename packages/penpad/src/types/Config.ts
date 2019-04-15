import { Component } from './Component'
import { Specimen } from './Specimen'

export interface Specimens {
  [id: string]: Specimen
}

export interface Pages {
  [id: string]: Component
}

/**
 * Primary configuration passed onto the root Styleguide object
 */

export interface Config {
  ui: {
    title?: string
  }
  specimens: Specimens
  pages: Pages
  children?: React.ReactNode
}
