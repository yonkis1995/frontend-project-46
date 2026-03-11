import yaml from 'js-yaml'

const getParser = (ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse
    case '.yml':
      return yaml.load
    case '.yaml':
      return yaml.load
    default:
      throw new Error(`Unsupported file format: ${ext}`)
  }
}

export default getParser
