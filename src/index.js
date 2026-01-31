import getData from "./parseFile.js";
import _ from 'lodash';

const buildStylishDiff = (obj1, obj2) => {
    const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)))

    const lines = keys.flatMap((key) => {
        const hasInFirst = Object.hasOwn(obj1, key)
        const hasInSecond = Object.hasOwn(obj2, key)
    
        if (!hasInSecond) {
            return `  - ${key}: ${obj1[key]}`
        }

        if (!hasInFirst) {
            return `  + ${key}: ${obj2[key]}`
        }

        if (obj1[key] !== obj2[key]) {
            return [
            `  - ${key}: ${obj1[key]}`,
            `  + ${key}: ${obj2[key]}`,
        ]
        }

        return `    ${key}: ${obj1[key]}`
    })

    return ['{', ...lines, '}'].join('\n')
}


const genDiff = (filepath1, filepath2) => {
    const parsedData1 = getData(filepath1)
    const parsedData2 = getData(filepath2)

    return buildStylishDiff(parsedData1, parsedData2)
}

export default genDiff