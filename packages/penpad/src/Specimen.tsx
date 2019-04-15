import React, { useEffect } from 'react'
import ReactSpecimenView from './ReactSpecimenView'
import { useAppContext } from './state'
import toString from 'jsx-to-string'

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

      ...('description' in props ? { description: props.description } : null),

      view: [ReactSpecimenView, props],

      getCode: () => {
        let code: string
        try {
          code = toString(children)
        } catch (e) {
          code = `/* Error: ${e.message} */`
          console.log('Code error:', e)
        }
        return code
      }
    })

    const cleanup = () => {
      actions.removeSpecimen(id)
    }

    return cleanup
  }, [id, children])

  return <span />
}

interface Props {
  /** The React nodes to be rendered */
  children: React.ReactNode

  /** The name of the specimen */
  id: string

  /** Background color */
  background?: string

  /** Width */
  width?: string | number

  /** Description */
  description?: string
  padding?: number
}

export default Specimen
