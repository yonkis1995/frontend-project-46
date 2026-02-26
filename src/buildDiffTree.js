import _ from 'lodash'

const isObject = value => _.isPlainObject(value)

const buildDiffTree = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)))

  return keys.map((key) => {
    const hasInFirst = Object.hasOwn(obj1, key)
    const hasInSecond = Object.hasOwn(obj2, key)

    if (!hasInFirst) {
      return { key, type: 'added', value: obj2[key] }
    }

    if (!hasInSecond) {
      return { key, type: 'removed', value: obj1[key] }
    }

    const value1 = obj1[key]
    const value2 = obj2[key]

    if (isObject(value1) && isObject(value2)) {
      return { key, type: 'nested', children: buildDiffTree(value1, value2) }
    }

    if (!_.isEqual(value1, value2)) {
      return {
        key,
        type: 'updated',
        oldValue: value1,
        newValue: value2,
      }
    }

    return { key, type: 'unchanged', value: value1 }
  })
}

export default buildDiffTree
