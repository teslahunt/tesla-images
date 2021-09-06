'use strict'

const VIEW_ANGLES = ['STUD_3QTR', 'STUD_SEAT']
const VIEW_ANGLES_V2 = ['STUD_3QTR', 'REAR34', 'STUD_SEAT']

const M3_GENERIC_OPTIONS_CODES = [
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

module.exports = {
  VIEW_ANGLES,
  VIEW_ANGLES_V2,
  M3_OPTIONS_CODES: M3_GENERIC_OPTIONS_CODES.concat(
    M3_OLD_INTERIOR,
    M3_NEW_INTERIOR
  ),
  M3_GENERIC_OPTIONS_CODES,
  M3_OLD_INTERIOR,
  M3_NEW_INTERIOR
}
