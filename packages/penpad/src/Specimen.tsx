import React, { useEffect } from 'react'
import { useAppContext } from './state'

interface Props {
  children: React.ReactNode
  id: string
  background?: string
  width?: string
  description?: string
}

/**
 * Defines a specimen
 */

const Specimen = (props: Props) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) {
    throw new Error('Not in a PenpadContext')
  }

  const { children, id, ...otherProps } = props

  useEffect(() => {
    actions.addSpecimen({
      id,
      render: () => <>{children}</>,
      ...otherProps
    })

    const cleanup = () => {
      actions.removeSpecimen(id)
    }
    return cleanup
  }, [id, children])

  return <span />
}

export default Specimen
