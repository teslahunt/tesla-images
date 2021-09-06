'use strict'

const { URL } = require('url')

const {
  VIEW_ANGLES,
  VIEW_ANGLES_V2,
  M3_OPTIONS_CODES,
  M3_OLD_INTERIOR,
  M3_NEW_INTERIOR
} = require('./constants')

const pickFromArray = (orig, dist) =>
  orig.reduce((acc, item) => {
    const isPresent = dist.some(code => item.startsWith(code))
    return isPresent ? [...acc, item] : acc
  }, [])

const getModel3options = optionCodes => {
  const options = pickFromArray(
    optionCodes,
    M3_OPTIONS_CODES.concat(M3_OLD_INTERIOR, M3_NEW_INTERIOR)
  )

  return options
}

const getOptions = ({ optionCodes, model }) => {
  if (model === 'm3') return getModel3options(optionCodes)
  return optionCodes
}

const getViewAngles = ({ optionCodes, model }) => {
  // if (model === 'my') return VIEW_ANGLES_V2
  if (model === 'm3') return VIEW_ANGLES

  if (model === 'mx' && optionCodes.some(code => code.startsWith('MTX'))) {
    return VIEW_ANGLES_V2
  }

  if (model === 'ms' && optionCodes.some(code => code.startsWith('MTS'))) {
    return VIEW_ANGLES_V2
  }

  return VIEW_ANGLES
}

module.exports = ({ optionCodes, modelLetter }) => {
  const model = `m${modelLetter.toString().toLowerCase()}`
  const viewAngles = getViewAngles({ optionCodes, model })

  return viewAngles.map(view => {
    const url = new URL(
      'https://static-assets.tesla.com/configurator/compositor'
    )
    url.searchParams.set('bkba_opt', '2')
    url.searchParams.set('file_type', 'jpg')
    url.searchParams.set('model', model)
    url.searchParams.set(
      'options',
      getOptions({ optionCodes, model })
        .sort()
        .toString()
    )
    url.searchParams.set('size', '800')
    url.searchParams.set('view', view)

    return url.toString()
  })
}
