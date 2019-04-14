import React from 'react'

// Since we might invoke it as render({}), let's use FunctionComponent.
// Let's not allow React.ComponentClass
export type Component = React.FunctionComponent
