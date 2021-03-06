import { Component } from './Component'
import { Page } from './Page'
import { Specimen } from './Specimen'

export interface Specimens {
  [id: string]: Specimen
}

export interface Pages {
  [id: string]: Page
}

/**
 * Primary configuration passed onto the root Styleguide object
 */

export interface Config {
  ui: {
    title?: string
    isEmbedded?: boolean
  }
  specimens: Specimens
  pages: Pages
  children?: React.ReactNode
}
