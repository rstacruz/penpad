import { useEffect, useState } from 'react'

export interface TitleProps {
  title: string
}

export interface MetaProps {
  name?: string | undefined
  property?: string | undefined
  content: string
}

/**
 * React hook to set the document title.
 */

const useTitle = (title: string) => {
  useEffect(() => {
    const oldTitle = document.title
    document.title = title
    return () => {
      document.title = oldTitle
    }
  }, [title])
}

/**
 * React hook to insert a meta tag.
 */

const useMeta = (props: MetaProps) => {
  const { property, name, content } = props
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let el: HTMLElement

    if (!element) {
      el = spawnMetaElement()
      setElement(el)
    } else {
      el = element
    }

    // Set element's attributes
    setOrRemoveAttribute(el, 'property', property)
    setOrRemoveAttribute(el, 'name', name)
    setOrRemoveAttribute(el, 'content', content)

    return () => {
      if (el && el.parentNode) el.parentNode.removeChild(el)
    }
  }, [property, name, content])
}

/**
 * If `value` is given, sets an attribute. If it's null'ish, the attribute is removed.
 * @private
 */

const setOrRemoveAttribute = (
  el: HTMLElement,
  name: string,
  value: string | null | undefined
) => {
  if (value) {
    el.setAttribute(name, value)
  } else {
    el.removeAttribute(name)
  }
}

/**
 * Create a `<meta>` element and append it to the head.
 * @private
 */

const spawnMetaElement = () => {
  // Create the element
  const el = document.createElement('meta')

  // Append into <head>
  const heads = document.getElementsByTagName('head')
  const head = heads && heads[0]
  if (head) head.appendChild(el)

  return el
}

/**
 * Component version of useTitle.
 */

const Title = (props: TitleProps) => {
  useTitle(props.title)
  return null
}

/**
 * Component version of useMeta.
 */

const Meta = (props: MetaProps) => {
  useMeta(props)
  return null
}

/*
 * Export
 */

export { useTitle, useMeta, Title, Meta }
