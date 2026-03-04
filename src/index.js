import getData from './parseFile.js'
import buildDiffTree from './buildDiffTree.js'
import format from './formatters/index.js'

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parsedData1 = getData(filepath1)
  const parsedData2 = getData(filepath2)

  const diffTree = buildDiffTree(parsedData1, parsedData2)

  return format(diffTree, formatName)
}

export default genDiff
