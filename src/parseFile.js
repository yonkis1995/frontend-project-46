import fs from 'fs'
import path from 'path'
import getParser from './parsers.js'

const readFile = (filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(absPath, 'utf-8')
  return data
}

const getData = (filepath) => {
  const ext = path.extname(filepath)
  const parser = getParser(ext)
  const data = readFile(filepath)
  return parser(data)
}

export default getData
