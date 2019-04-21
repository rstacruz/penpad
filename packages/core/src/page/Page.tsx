import React, { useEffect } from 'react'
import { useAppContext } from '../state'
import BasePage, { Props } from './BasePage'
import MarkdownLayout from './MarkdownLayout'

/**
 * A page.
 *
 * By default, it uses a Markdown layout based on github-markdown-css.
 */

const Page = (props: Props) => (
  <BasePage {...props}>
    <MarkdownLayout>{props.children || null}</MarkdownLayout>
  </BasePage>
)

export default Page
