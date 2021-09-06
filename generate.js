'use strict'

const { URL } = require('url')

const {
  VIEW_ANGLES,
  VIEW_ANGLES_V2,
  M3_OPTIONS_CODES,
  MY_OPTIONS_CODES
} = require('./constants')

const pickFromArray = (orig, dist) =>
  orig.reduce((acc, item) => {
    const isPresent = dist.some(code => item.startsWith(code))
    return isPresent ? [...acc, item] : acc
  }, [])

const hasOptionCode = (optionCode, optionCodes) =>
  optionCodes.some(code => code.startsWith(optionCode))

const getOptions = ({ optionCodes, model }) => {
  if (model === 'm3') return pickFromArray(optionCodes, M3_OPTIONS_CODES)
  if (model === 'my') return pickFromArray(optionCodes, MY_OPTIONS_CODES)
  return optionCodes
}

const getViewAngles = ({ optionCodes, model }) => {
  if (model === 'my') return VIEW_ANGLES_V2
  if (model === 'm3') return VIEW_ANGLES
  if (model === 'mx' && hasOptionCode('MTX', optionCodes)) return VIEW_ANGLES_V2
  if (model === 'ms' && hasOptionCode('MTS', optionCodes)) return VIEW_ANGLES_V2
  return VIEW_ANGLES
}

const url = new URL('https://static-assets.tesla.com/configurator/compositor')
url.searchParams.set('bkba_opt', '2')
url.searchParams.set('file_type', 'jpg')

module.exports = ({ optionCodes, modelLetter }) => {
  const model = `m${modelLetter.toString().toLowerCase()}`
  const viewAngles = getViewAngles({ optionCodes, model })

  url.searchParams.set('model', model)
  url.searchParams.set(
    'options',
    getOptions({ optionCodes, model })
      .sort()
      .toString()
  )
  url.searchParams.set('size', '800')

  return viewAngles.map(view => {
    url.searchParams.set('view', view)
    return url.toString()
  })
}
