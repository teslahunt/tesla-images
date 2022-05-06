'use strict'

const { URL } = require('url')

const {
  VIEW_ANGLES,
  VIEW_ANGLES_OLD,
  VIEW_ANGLES_V2,
  M3_OPTIONS_CODES,
  M3_NON_REFRESH,
  M3_INTERIOR_CODES,
  MY_OPTIONS_CODES
} = require('./constants')

const pick = (orig, dist) =>
  orig.reduce((acc, item) => {
    const isPresent = dist.some(input => test(item, input))
    if (isPresent) acc.push(item)
    return acc
  }, [])

const has = (collection, input) => collection.some(item => test(item, input))

const test = (input, partial) =>
  input instanceof RegExp ? input.test(partial) : input.startsWith(partial)

const isFirstGeneration = optionCodes =>
  optionCodes.includes('MI00') || !has(optionCodes, 'MI0')

const getOptions = ({ optionCodes, model }) => {
  switch (model) {
    case 'm3': {
      const pickedOptionCodes = pick(optionCodes, M3_OPTIONS_CODES)

      const hasInterior = M3_INTERIOR_CODES.some(optionCode =>
        has(pickedOptionCodes, optionCode)
      )

      if (hasInterior) return pickedOptionCodes

      const isRefresh =
        has(optionCodes, 'MT') &&
        !M3_NON_REFRESH.some(optionCode => has(optionCodes, optionCode))

      return hasInterior
        ? pickedOptionCodes
        : [isRefresh ? 'IBB1' : 'IN3PB'].concat(pickedOptionCodes)
    }

    case 'my': {
      return pick(optionCodes, MY_OPTIONS_CODES)
    }

    case 'ms': {
      const isRefresh = has(optionCodes, 'ST0Y')

      return isRefresh
        ? optionCodes.filter(optionCode => !test(optionCode, /IC/))
        : optionCodes
    }

    default:
      return optionCodes
  }
}

const getViewAngles = ({ optionCodes, model }) => {
  if (model === 'my') return VIEW_ANGLES

  if (model === 'm3') return VIEW_ANGLES

  if (model === 'mx') {
    if (has(optionCodes, 'MTX')) return VIEW_ANGLES_V2
    return ['STUD_3QTR', 'STUD_SEAT']
  }

  if (model === 'ms') {
    if (has(optionCodes, 'MTS')) return VIEW_ANGLES_V2
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
