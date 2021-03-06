import React from 'react'

/**
 * Harvests stylesheets and returns them as React nodes.
 */

export const HarvestHeadStyles = () => {
  const styleEls = document.querySelectorAll<HTMLStyleElement>('style')

  // TODO: refactor so that it'd be impossible to have the same key
  const styles = Array.from(styleEls).map(element => {
    const props = toProps(element.attributes)
    const key = JSON.stringify([props, element.innerText])
    return (
      <style key={key} {...toProps(element.attributes)}>
        {element.innerText}
      </style>
    )
  })

  const linkEls = document.querySelectorAll<HTMLLinkElement>(
    'link[rel="stylesheet"]'
  )

  const links = Array.from(linkEls).map(element => {
    const props = toProps(element.attributes)
    const key = JSON.stringify([props])
    return <link key={key} {...props} />
  })

  return (
    <>
      {styles}
      {links}
    </>
  )
}

/**
 * Converts DOM attributes (eg, `element.attributes`) into a properties object
 * for React.
 *
 * @private
 * @example
 *     toProps(element.attributes)
 *     // => { href: '/abc.css', rel: 'stylesheet' }
 */

const toProps = (attributes: NamedNodeMap) => {
  return Array.from(attributes).reduce((result, attr) => {
    return { ...result, [attr.name]: attr.value }
  }, {})
}

/*
 * Export
 */

export default HarvestHeadStyles
