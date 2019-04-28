import { useEffect } from 'react'
import BasePanel from '../BasePanel'
import { useAppContext } from '../state'
import { Block } from '../types/Block'

/**
 * A plugin to add a block (eg, a panel). Can be used by other plugins to easily add a block.
 */

const AddBlockPlugin = (props: Props) => {
  const { state, actions } = useAppContext()

  useEffect(() => {
    if (!state || !actions) return
    return actions.addBlock(props.block())
  }, [])

  return null
}

/*
 * Properties
 */

export interface Props {
  /** Thunk of the block to be rendered */
  block: () => Block
}

export default AddBlockPlugin
