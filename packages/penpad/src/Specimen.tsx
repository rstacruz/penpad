import toString from 'react-element-to-jsx-string'
import React, { useEffect } from 'react'
import ReactSpecimenView from './ReactSpecimenView'
import { useAppContext } from './state'

/*
 * See:
 * https://github.com/algolia/react-element-to-jsx-string#reactelementtojsxstringreactelement-options
 */

const TO_STRING_OPTIONS = {}

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
          code = toString(children, TO_STRING_OPTIONS)
        } catch (e) {
          code = `/* Error: ${e.message} */`
        }
        return code
      }
    })

    const cleanup = () => {
      actions.removeSpecimen(id)
    }

    return cleanup
  }, [id, children])

  // Render nothing
  return null
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
