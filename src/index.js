import getData from "./parseFile.js";

const genDiff = (filepath1, filepath2) => {
    const parsedData1 = getData(filepath1)
    const parsedData2 = getData(filepath2)

    return "test string" // temporary stub
}

export default genDiff