import { useEffect, useState } from 'react'

/** @typedef MetaProps {import('./types').MetaProps} */
/** @typedef TitleProps {import('./types').TitleProps} */

/**
 * React hook to set the document title.
 * @param {string} title
 */

const useTitle = title => {
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
 * @param {MetaProps} props
 */

const useMeta = props => {
  const { property, name, content } = props
  const [element, setElement] = useState(/* <HTMLMetaElement | null> */ null)

  useEffect(() => {
    /** @type HTMLMetaElement */
    let el

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
 * @type {HTMLElement} el
 * @type {string} name
 * @type {string | null | undefined} value
 * @private
 */

const setOrRemoveAttribute = (el, name, value) => {
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
 * @param {TitleProps} props
 */

const Title = props => {
  useTitle(props.title)
  return null
}

/**
 * Component version of useMeta.
 * @param {MetaProps} props
 */

const Meta = props => {
  useMeta(props)
  return null
}

/*
 * Export
 */

export { useTitle, useMeta, Title, Meta }
