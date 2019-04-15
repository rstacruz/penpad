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
    : typeof props.width === 'string'
    ? props.width
    : null

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
    <FrameWrapper
      className={cn(CSS.iframe, {
        [CSS.isResponsive]: !!frameWidth
      })}
      style={frameWidth ? { width: frameWidth, minWidth: frameWidth } : {}}
    >
      <div className={CSS.iframeBody}>{body}</div>
    </FrameWrapper>
  )
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
