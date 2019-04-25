import React from 'react'

export interface Page {
  id: string

  /**
   * A `[component, props]` tuple to be rendered.
   * See `Specimen.view` for the rationale on why this is defined like this.
   */

  view: [React.FunctionComponent<any>, any]
}
