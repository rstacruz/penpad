import React, { useEffect } from 'react'
import { useAppContext } from './state'

interface Props {
  children: React.ReactNode
  id: string
}

const Page = (props: Props) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) {
    throw new Error('<Page> needs to be placed inside a PenpadContext')
  }

  const { children, id } = props

  useEffect(() => {
    actions.addPage({ id, render: () => <>{children}</> })
    return () => {
      actions.removePage(id)
    }
  }, [id, children])

  return <span />
}

export default Page
