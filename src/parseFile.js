import fs from 'fs'
import path from 'path'

const readFile = (filepath) => {
    const absPath = path.resolve(process.cwd(), filepath)
    const data = fs.readFileSync(absPath, 'utf-8')
    return data
}

const parse = (data, ext) => {
    switch (ext) {
        case '.json':
            return JSON.parse(data)
        default:
            throw new Error('Unsupported file extension')
    }
}

const getData = (filepath) => {
    const ext = path.extname(filepath)
    const data = readFile(filepath)
    return parse(data, ext)
}

export default getData
