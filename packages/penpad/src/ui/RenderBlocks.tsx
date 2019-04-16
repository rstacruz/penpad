import React from 'react'
import ErrorCatcher from '../utils/ErrorCatcher'
import { BlockList } from '../types/BlockList'

/**
 * Renders blocks from `state.blocks`. Used to, say, render custom panels in the right sidebar.
 */

const RenderBlocks = ({ blocks }: { blocks: BlockList }) => {
  return (
    <>
      {Object.entries(blocks || {}).map(([priority, viewList]) => (
        <React.Fragment key={priority}>
          {Object.entries(viewList || {}).map(([id, view]) => {
            if (!view) return null
            const [ViewComponent, props] = view

            if (ViewComponent) {
              return (
                <ErrorCatcher silent key={id}>
                  {React.createElement(ViewComponent, props)}
                </ErrorCatcher>
              )
            } else {
              return <React.Fragment key={id} />
            }
          })}
        </React.Fragment>
      ))}
    </>
  )
}

export default RenderBlocks
