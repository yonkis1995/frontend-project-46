import yaml from 'js-yaml'

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.load,
  '.yaml': yaml.load,
}

const getParser = (ext) => {
  const parser = parsers[ext]

  if (!parser) {
    throw new Error(`Unsupported file extension: ${ext}`)
  }

  return parser
}

export default getParser
