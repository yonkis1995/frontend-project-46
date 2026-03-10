import { fileURLToPath } from 'url'
import path from 'path'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('gendiff compares nested json files (stylish)', () => {
  const file1 = getFixturePath('file1_nested.json')
  const file2 = getFixturePath('file2_nested.json')

  const result = genDiff(file1, file2)

  expect(result).toMatchSnapshot()
})

test('gendiff compares nested yaml files (stylish)', () => {
  const file1 = getFixturePath('file1_nested.yml')
  const file2 = getFixturePath('file2_nested.yml')

  const result = genDiff(file1, file2)

  expect(result).toMatchSnapshot()
})

test('gendiff compares nested json files (plain)', () => {
  const file1 = getFixturePath('file1_nested.json')
  const file2 = getFixturePath('file2_nested.json')

  const result = genDiff(file1, file2, 'plain')

  expect(result).toMatchSnapshot()
})

test('gendiff compares nested yaml files (plain)', () => {
  const file1 = getFixturePath('file1_nested.yml')
  const file2 = getFixturePath('file2_nested.yml')

  const result = genDiff(file1, file2, 'plain')

  expect(result).toMatchSnapshot()
})

test('gendiff compares nested json files (json)', () => {
  const file1 = getFixturePath('file1_nested.json')
  const file2 = getFixturePath('file2_nested.json')

  const result = genDiff(file1, file2, 'json')

  expect(result).toMatchSnapshot()
})

test('gendiff compares nested yaml files (json)', () => {
  const file1 = getFixturePath('file1_nested.yml')
  const file2 = getFixturePath('file2_nested.yml')

  const result = genDiff(file1, file2, 'json')

  expect(result).toMatchSnapshot()
})
