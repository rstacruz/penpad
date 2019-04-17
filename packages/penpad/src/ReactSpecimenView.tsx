import cn from 'classnames'
import React from 'react'
import CSS from './SpecimenView.module.css'
import { useAppContext } from './state'
import FrameWrapper from './utils/FrameWrapper'

/**
 * Displays the given React specimen in an iframe.
 */

const ReactSpecimenView = (props: Props) => {
  const { state } = useAppContext()

  // If responsive mode
  const frameWidth = state && state.specimenView.frameWidth

  // If it's in responsive mode, don't allow fixed sizes (ie, numbers),
  // but allow fluid sizes (eg, '100%')
  const bodyWidth = !frameWidth
    ? props.width
    : isNonNumericString(props.width)
    ? props.width
    : null

  // Body placed inside the frame wrapper.
  const body = (
    <div
      className={CSS.frame}
      style={{
        width: bodyWidth || 'auto',
        margin: 'auto',
        flex: '0 0 auto',
        background: props.background || 'white',
        padding: props.padding || 0
      }}
    >
      {props.children}
    </div>
  )

  return (
    <div
      style={{
        padding: '16px',
        display: 'flex',
        width: '100%',
        height: '100%'
      }}
    >
      <FrameWrapper
        className={cn(CSS.iframe, {
          [CSS.isResponsive]: !!frameWidth
        })}
        style={frameWidth ? { width: frameWidth, minWidth: frameWidth } : {}}
      >
        <div className={CSS.iframeBody}>{body}</div>
      </FrameWrapper>
    </div>
  )
}

/**
 * Checks if a given string or number is a non-numeric string.
 * String representations of numbers aren't counted as non-numeric strings.
 *
 * @example
 *     isNonNumericString('100')   // => false
 *     isNonNumericString('100%')  // => true
 *     isNonNumericString('100px') // => true
 */

const isNonNumericString = (width: any) => {
  return typeof width === 'string' && isNaN(+width)
}

interface Props {
  children: React.ReactNode
  id: string
  background?: string
  width?: string | number
  description?: string
  padding?: number
}

export default ReactSpecimenView
