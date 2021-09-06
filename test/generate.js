'use strict'

const reachableUrl = require('reachable-url')
const pMap = require('p-map')
const test = require('ava')

const isReachable = async url =>
  reachableUrl.isReachable(
    await reachableUrl(url, {
      headers: {
        'user-agent': 'googlebot'
      }
    })
  )

const isAllReachable = async urls => {
  const results = await pMap(urls, isReachable)
  return results.every(url => url === true)
}

const generate = require('../generate')

test('Model 3', async t => {
  const photos = generate({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APF2',
      'APH4',
      'AU3P',
      'BC3B',
      'BT37',
      'CDM0',
      'CH06',
      'COLU',
      'DRLH',
      'DV4W',
      'FC3P',
      'FG31',
      'FM3U',
      'GLFR',
      'HL31',
      'HM30',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MR31',
      'PPSW',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3HS',
      'TM00',
      'TW00',
      'UT3P',
      'W39B',
      'WR00',
      'ZINV',
      'MI00',
      'PL30',
      'SLR0',
      'ST31',
      'BG31',
      'I36M',
      'OSSB',
      'AUF1',
      'RSF1',
      'ILF1',
      'FGF1',
      'CPF0',
      'HLP1',
      'APBS',
      'IN3PB',
      'PRM31',
      'MT303'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2021 (chrome delete)', async t => {
  const photos = generate({
    modelLetter: '3',
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3P',
      'BC3B',
      'BT38',
      'CDM0',
      'CH15',
      'CONL',
      'DRLH',
      'DV4W',
      'FC02',
      'FG31',
      'FM3B',
      'GLFR',
      'HL32',
      'HM30',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MR31',
      'PMNG',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3MS',
      'TM00',
      'TW00',
      'UT3P',
      'W40B',
      'WR00',
      'ZINV',
      'MI02',
      'PL30',
      'SLR0',
      'ST30',
      'BG31',
      'I36M',
      'OSSB',
      'AUF1',
      'RSF1',
      'ILF1',
      'FGF1',
      'CPF1',
      'HP31',
      'PT01',
      'RL31',
      'SWF0',
      'APBS',
      'IPB0',
      'PRM31',
      'MT316'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X', async t => {
  const photos = generate({
    modelLetter: 'x',
    optionCodes: [
      'BP00',
      'AH01',
      'AD15',
      'GLTL',
      'AU01',
      'X042',
      'DA02',
      'APH1',
      'APD2',
      'X028',
      'BTX4',
      'PX4D',
      'BS00',
      'CC03',
      'BC0R',
      'CH04',
      'CF00',
      'CW02',
      'CODE',
      'X039',
      'IDCF',
      'X026',
      'DRLH',
      'AF02',
      'FG02',
      'FR02',
      'X007',
      'X011',
      'PI01',
      'IX01',
      'X001',
      'LP01',
      'LT3W',
      'MI00',
      'X037',
      'MDLX',
      'DV4W',
      'X024',
      'X003',
      'PPSW',
      'PA00',
      'PS00',
      'PK00',
      'X031',
      'PF01',
      'X044',
      'TM00',
      'BR00',
      'REEU',
      'RFPX',
      'OSSW',
      'X014',
      'S06W',
      'ME02',
      'QLEW',
      'SR01',
      'SP01',
      'X019',
      'SC04',
      'SU01',
      'TP03',
      'TRA1',
      'TR01',
      'TIG2',
      'DSH7',
      'TW00',
      'MT90P',
      'UTAB',
      'WTUT',
      'YFCC',
      'CPF1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X Plaid', async t => {
  const photos = generate({
    modelLetter: 'x',
    optionCodes: ['MTX10', 'PPSW', 'WX00', 'IBE00', 'ST0Y']
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model S', async t => {
  const photos = generate({
    modelLetter: 's',
    optionCodes: [
      'BP00',
      'ADPX2',
      'AU00',
      'DA02',
      'APH1',
      'APD2',
      'X028',
      'BTX4',
      'BS00',
      'BC0B',
      'CH04',
      'CF00',
      'CW02',
      'CODE',
      'X039',
      'IDCF',
      'X027',
      'DRLH',
      'AF02',
      'FG02',
      'DCF0',
      'X007',
      'X011',
      'PI01',
      'IX01',
      'X001',
      'LP01',
      'MI01',
      'X037',
      'MDLS',
      'DV4W',
      'X025',
      'X003',
      'PMSS',
      'PA00',
      'PS01',
      'PK00',
      'X031',
      'PX00',
      'PF00',
      'X044',
      'TM00',
      'BR00',
      'RU00',
      'REEU',
      'RFP2',
      'X014',
      'ME02',
      'QNEB',
      'SR01',
      'SP01',
      'X021',
      'SC04',
      'SU01',
      'TP03',
      'TR00',
      'DSH7',
      'MT90A',
      'UTAB',
      'WTSS',
      'YFFC',
      'CPF1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model S Plaid', async t => {
  const photos = generate({
    modelLetter: 's',
    optionCodes: ['MTS10', 'PPSW', 'WS90', 'IBE00', 'ST0Y']
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

// test.skip('Model Y', async t => {
//   const photos = generate({
//     modelLetter: 'y',
//     optionCodes: [
//       'AD15',
//       'AF02',
//       'APF1',
//       'APH4',
//       'AU3P',
//       'BC3B',
//       'BT38',
//       'CDM0',
//       'CH15',
//       'COLU',
//       'DRLH',
//       'DV4W',
//       'FC02',
//       'FG31',
//       'FM3B',
//       'HL32',
//       'HM30',
//       'ID3A',
//       'IL31',
//       'LT03',
//       'MDLY',
//       'MR31',
//       'PMNG',
//       'PC30',
//       'REEU',
//       'RF3G',
//       'RS3H',
//       'S3PW',
//       'SA3P',
//       'SC04',
//       'STCP',
//       'SU3C',
//       'TY9S',
//       'TM00',
//       'TW00',
//       'UT3P',
//       'WY9S',
//       'WR00',
//       'ZINV',
//       'MI00',
//       'PL30',
//       'SLR0',
//       'ST33',
//       'BG31',
//       'OSSB',
//       'AUF1',
//       'RSF1',
//       'ILF1',
//       'FGF1',
//       'CPF0',
//       'TSHP',
//       'TR00',
//       'SR05',
//       'P3WS',
//       'RL32',
//       'BY01',
//       'FD01',
//       'RD05',
//       'SWF1',
//       'LVB1',
//       'VC00',
//       'APPB',
//       'APBS',
//       'INPW0',
//       'PRMY1',
//       'WY19B',
//       'MTY07',
//       'STY5S'
//     ]
//   })

//   console.log(photos)
//   t.true(await isAllReachable(photos))
//   t.snapshot(photos)
// })
