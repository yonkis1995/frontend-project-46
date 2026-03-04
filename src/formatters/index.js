import formatStylish from './stylish.js'

const formatters = {
  stylish: formatStylish,
}

export default (tree, formatName) => {
  const formatter = formatters[formatName]
  if (!formatter) throw new Error(`Unknown format: ${formatName}`)
  return formatter(tree)
}