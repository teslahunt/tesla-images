'use strict'

const VIEW_ANGLES = ['STUD_3QTR', 'STUD_SEAT']

const VIEW_ANGLES_OLD = [
  'STUD_3QTR',
  // 'STUD_SEAT_3QTR',
  // 'STUD_SEAT_ABOVE'
  // 'STUD_SIDE',
  // 'STUD_REAR',
  'STUD_SEAT_ALTA'
]

const VIEW_ANGLES_V2 = ['STUD_3QTR_V2', 'STUD_SEAT_V2']

// 'STUD_3QTR', 'STUD_SIDE', 'STUD_REAR', 'STUD_SEAT_ALTA'
// const VIEW_ANGLES_V2 = ['STUD_3QTR_V2', 'STUD_WHEEL_V2', 'STUD_SEAT_V2']

const PAINT_CODES = [
  'PBCW',
  'PBSB',
  'PMAB',
  'PMBL',
  'PMMB',
  'PMNG',
  'PMSG',
  'PMSS',
  'PMTG',
  'PN00',
  'PN01',
  'PPMR',
  'PPSB',
  'PPSR',
  'PPSW',
  'PPTI',
  'PPTI',
  'PR00',
  'PR01'
]

const M3_GENERIC_CODES = [
  'MT3', // chasis
  'W3', // wheels
  'W4' // wheels
]

/**
 * Models before heat pump refresh around October 2020
 */
const M3_NON_REFRESH = ['MT30', 'MT31', 'MT336']

const M3_INTERIOR_CODES = [
  // 'IN3BB',
  // 'IN3BW',
  'IN3PB',
  'IN3PW',
  'INBBW',
  'INBFP',
  'INBPP',
  'INBPW',
  'INBTB',
  'INFBP',
  'INLPC',
  'INLPP',
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
  'QTFC',
  'QTFP',
  'QTFW',
  'QTPB',
  'QTPC',
  'QTPP',
  'QTPT',
  'QTTB',
  'QTWS',
  'QXMB',
  // new!
  'IBB0',
  'IBB1',
  'IBW0',
  'IBW1',
  // highland
  'IPB2',
  'IPB3',
  'IPW2',
  'IPW3'
]

const MY_GENERIC_OPTIONS_CODES = ['MTY', 'WY1', 'WY2']

const MY_INTERIOR_CODES = ['IN']

module.exports = {
  VIEW_ANGLES,
  VIEW_ANGLES_OLD,
  VIEW_ANGLES_V2,
  M3_INTERIOR_CODES,
  M3_NON_REFRESH,
  M3_OPTIONS_CODES: M3_GENERIC_CODES.concat(PAINT_CODES, M3_INTERIOR_CODES),
  MY_OPTIONS_CODES: MY_GENERIC_OPTIONS_CODES.concat(
    PAINT_CODES,
    MY_INTERIOR_CODES
  ),
  M3_GENERIC_CODES
}
