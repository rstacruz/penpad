import React from 'react'
import Markdown from '../styles/github-markdown.module.css'

/**
 * Wraps everything in a layout that's styled using github-markdown-css.
 */

const MarkdownLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={Markdown.body}
      style={{ width: '700px', margin: '1em auto' }}
    >
      {children}
    </div>
  )
}

export default MarkdownLayout
