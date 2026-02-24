import _ from 'lodash'

const INDENT_SIZE = 4
const SHIFT_LEFT = 2

const stringifyValue = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value)
  }

  const currentIndent = ' '.repeat(depth * INDENT_SIZE)
  const bracketIndent = ' '.repeat((depth - 1) * INDENT_SIZE)

  const lines = Object.entries(value).map(([key, val]) => `${currentIndent}${key}: ${stringifyValue(val, depth + 1)}`)

  return ['{', ...lines, `${bracketIndent}}`].join('\n')
}

const formatStylish = (tree) => {
  const iter = (nodes, depth) => {
    const indent = ' '.repeat(depth * INDENT_SIZE - SHIFT_LEFT)
    const bracketIndent = ' '.repeat((depth - 1) * INDENT_SIZE)

    const lines = nodes.flatMap((node) => {
      const { key, type } = node

      switch (type) {
        case 'nested': {
          const childrenLines = iter(node.children, depth + 1)
          return `${indent}  ${key}: ${childrenLines}`
        }

        case 'unchanged':
          return `${indent}  ${key}: ${stringifyValue(node.value, depth + 1)}`

        case 'added':
          return `${indent}+ ${key}: ${stringifyValue(node.value, depth + 1)}`

        case 'removed':
          return `${indent}- ${key}: ${stringifyValue(node.value, depth + 1)}`

        case 'updated':
          return [
            `${indent}- ${key}: ${stringifyValue(node.oldValue, depth + 1)}`,
            `${indent}+ ${key}: ${stringifyValue(node.newValue, depth + 1)}`,
          ]

        default:
          throw new Error(`Unknown node type: ${type}`);
      }
    })

    return ['{', ...lines, `${bracketIndent}}`].join('\n')
  }

  return iter(tree, 1)
}

export default formatStylish