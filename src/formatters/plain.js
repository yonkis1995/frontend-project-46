import _ from 'lodash'

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]'
  }

  if (typeof value === 'string') {
    return `'${value}'`
  }

  return String(value)
}

const formatPlain = (tree) => {
  const iter = (nodes, path) => nodes.flatMap((node) => {
    const property = path ? `${path}.${node.key}` : node.key

    switch (node.type) {
      case 'nested':
        return iter(node.children, property)

      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.value)}`

      case 'removed':
        return `Property '${property}' was removed`

      case 'updated':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`

      case 'unchanged':
        return []

      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return iter(tree, '').join('\n')
}

export default formatPlain
