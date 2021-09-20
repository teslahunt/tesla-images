'use strict'

const { URL } = require('url')

const {
  VIEW_ANGLES,
  VIEW_ANGLES_OLD,
  VIEW_ANGLES_V2,
  M3_OPTIONS_CODES,
  M3_INTERIOR_CODES,
  M3_INTERIOR_DEFAULT,
  MY_OPTIONS_CODES
} = require('./constants')

const pickFromArray = (orig, dist) =>
  orig.reduce((acc, item) => {
    const isPresent = dist.some(code => item.startsWith(code))
    return isPresent ? [...acc, item] : acc
  }, [])

const isFirstGeneration = optionCodes =>
  optionCodes.includes('MI00') || !hasOptionCode('MI0', optionCodes)

const hasOptionCode = (optionCode, optionCodes) =>
  optionCodes.some(code => code.startsWith(optionCode))

const getOptions = ({ optionCodes, model }) => {
  switch (model) {
    case 'm3': {
      optionCodes = pickFromArray(optionCodes, M3_OPTIONS_CODES)

      const hasInterior = M3_INTERIOR_CODES.some(optionCode =>
        hasOptionCode(optionCode, optionCodes)
      )

      return hasInterior
        ? optionCodes
        : [M3_INTERIOR_DEFAULT].concat(optionCodes)
    }

    case 'my': {
      return pickFromArray(optionCodes, MY_OPTIONS_CODES)
    }

    default:
      return optionCodes
  }
}

const getViewAngles = ({ optionCodes, model }) => {
  if (model === 'my') return VIEW_ANGLES

  if (model === 'm3') return VIEW_ANGLES

  if (model === 'mx') {
    if (hasOptionCode('MTX', optionCodes)) return VIEW_ANGLES_V2
    return ['STUD_3QTR', 'STUD_SEAT']
  }

  if (model === 'ms') {
    if (hasOptionCode('MTS', optionCodes)) return VIEW_ANGLES_V2
    return isFirstGeneration(optionCodes) ? VIEW_ANGLES : VIEW_ANGLES_OLD
  }

  throw TypeError(`Model '${model}' not supported`)
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
