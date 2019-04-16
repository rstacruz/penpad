import React from 'react'
import CSS from './BasePanel.module.css'

/**
 * A basic panel, use me for plugins.
 *
 * @example
 *     <BasePanel title='hello'>
 *       Panel UI goes here
 *     </BasePanel>
 */

const BasePanel = (props: { title?: string; children: React.ReactNode }) => {
  return (
    <div className={CSS.root}>
      {props.title ? (
        <div className={CSS.header}>
          <h3 className={CSS.title}>{props.title}</h3>
        </div>
      ) : null}

      <div className={CSS.body}>{props.children}</div>
    </div>
  )
}
export default BasePanel
