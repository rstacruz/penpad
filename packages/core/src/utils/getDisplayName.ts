/**
 * Also see: https://github.com/algolia/react-element-to-jsx-string/blob/0b17eaf3decafac13f276e705d4c850418cd4bb7/src/parser/parseReactElement.js#L15
 */

function getDisplayName(element: any) {
  if (element.type && typeof element.type === 'string') {
    return element.type
  }

  if (element.type) {
    const name = element.type.displayName || element.type.name
    if (name) return name
  }

  return 'Component'
}

export default getDisplayName
