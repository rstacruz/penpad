import cn from 'classnames'
import React from 'react'
import Markdown from '../styles/github-markdown.module.css'
import CSS from './MarkdownLayout.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

/**
 * Wraps everything in a layout that's styled using github-markdown-css.
 */

const MarkdownLayout = ({ children, className }: Props) => {
  return (
    <div className={cn(Markdown.body, CSS.root, className)}>{children}</div>
  )
}

export default MarkdownLayout
