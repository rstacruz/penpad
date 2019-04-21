import React from 'react'
import Frame from 'react-frame-component'
import harvestHead from '../helpers/harvestHead'

/**
 * Wraps the `children` in an iframe.
 * Injects styles.
 *
 * See:
 * https://github.com/ryanseddon/react-frame-component
 */

const FrameWrapper = ({ children, className, style }: Props) => {
  const head = (
    <>
      {harvestHead()}
      <style>{`
        html, body {
          min-height: 100%;
          margin: 0;
          padding: 0;
          background: transparent;
          overflow: auto;
        }
      `}</style>
    </>
  )

  return (
    <Frame
      head={head}
      className={className}
      style={style || {}}
      data-testid='framewrapper-iframe'
    >
      {children}
    </Frame>
  )
}

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default FrameWrapper
