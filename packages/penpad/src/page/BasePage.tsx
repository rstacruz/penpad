import React, { useEffect } from 'react'
import { useAppContext } from '../state'

export interface Props {
  children: React.ReactNode
  id: string
}

const BasePage = (props: Props) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) {
    throw new Error('<Page> needs to be placed inside a PenpadContext')
  }

  const { children, id } = props

  useEffect(() => {
    actions.addPage({ id, view: [React.Fragment, { children }] })
    return () => {
      actions.removePage(id)
    }
  }, [id, children])

  // Render nothing
  return null
}

export default BasePage
