import genDiff from '../src/index.js'

test('genDiff returns a string', () => {
  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')
  expect(typeof result).toBe('string')
})
