import getData from './parseFile.js'
import buildDiffTree from './buildDiffTree.js'
import formatStylish from './stylish.js'

const genDiff = (filepath1, filepath2) => {
  const parsedData1 = getData(filepath1)
  const parsedData2 = getData(filepath2)

  const diffTree = buildDiffTree(parsedData1, parsedData2)

  return formatStylish(diffTree)
};

export default genDiff