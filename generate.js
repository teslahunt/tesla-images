'use strict'

const qsm = require('qsm')

const MS_VIEW_ANGLES = ['STUD_3QTR', 'STUD_REAR', 'STUD_SEAT_ALTA']
const M3_VIEW_ANGLES = ['STUD_3QTR', 'STUD_REAR', 'STUD_SEAT']
const MX_VIEW_ANGLES = ['STUD_3QTR', 'STUD_REAR', 'STUD_SEAT']
const VIEW_ANGLES_V2 = ['STUD_3QTR_V2', 'REAR34', 'STUD_SEAT_V2']

const M3_OPTIONS_CODES = [
  'MT3',
  'W3',
  'W4',
  'PBSB',
  'PMNG',
  'PMSS',
  'PPMR',
  'PPSB',
  'PPSW'
]

const M3_OLD_INTERIOR = [
  'IN3B2',
  'IN3BB',
  'IN3BW',
  'IN3PB',
  'IN3PW',
  'INB3C',
  'INB3P',
  'INBBP',
  'INBBW',
  'INBC3P',
  'INBC3W',
  'INBCW',
  'INBFP',
  'INBFW',
  'INBLB',
  'INBLW',
  'INBP3P',
  'INBP3W',
  'INBPB',
  'INBPC',
  'INBPP',
  'INBPW',
  'INBTB',
  'INBWS',
  'INFBP',
  'INLFC',
  'INLFP',
  'INLPC',
  'INLPP',
  'INPTB',
  'INWLT',
  'INWPB',
  'INWPT',
  'INYPB',
  'INYPW',
  'IPB0',
  'IPB1',
  'IPW0',
  'IPW1',
  'IVBPP',
  'IVBSW',
  'IVBTB',
  'IVLPC',
  'QPBT',
  'QPMB',
  'QPMG',
  'QPMT',
  'QPMW',
  'QTFC',
  'QTFP',
  'QTFW',
  'QTPB',
  'QTPC',
  'QTPP',
  'QTPT',
  'QTPW',
  'QTSW',
  'QTTB',
  'QTVB',
  'QTVT',
  'QTWS',
  'QXMB',
  'QXMG'
]

const M3_NEW_INTERIOR = ['IBB0', 'IBB1', 'IBW0', 'IBW1']

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
  if (model === 'm3') return M3_VIEW_ANGLES

  if (model === 'mx' && optionCodes.some(code => code.startsWith('MTX'))) {
    return VIEW_ANGLES_V2
  }

  if (model === 'ms' && optionCodes.some(code => code.startsWith('MTS'))) {
    return VIEW_ANGLES_V2
  }

  if (model === 'mx') return MX_VIEW_ANGLES

  return MS_VIEW_ANGLES
}

module.exports = ({ optionCodes, modelLetter }) => {
  const model = `m${modelLetter.toString().toLowerCase()}`
  const viewAngles = getViewAngles({ optionCodes, model })

  const result = viewAngles.map(view =>
    qsm.add('https://static-assets.tesla.com/configurator/compositor', {
      model,
      options: getOptions({ optionCodes, model })
        .sort()
        .toString(),
      view,
      file_type: 'jpg',
      size: '800',
      bkba_opt: '2'
      // version: '0.0.25',
      // context: 'design_studio_2'
    })
  )

  return result
}
