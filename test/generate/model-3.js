'use strict'

const test = require('ava')

const generate = require('../../generate')

const { isAllReachable } = require('../util')

test('Model 3 2017', async t => {
  const photos = generate({
    modelLetter: 3,
    optionCodes: [
      'APBS',
      'DV2W',
      'IN3PB',
      'PPMR',
      'PRM31',
      'SC04',
      'MDL3',
      'W39B',
      'MT302',
      'CPF0',
      'RSF1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2018', async t => {
  const photos = generate({
    modelLetter: 3,
    optionCodes: [
      'APF2',
      'APBS',
      'DV4W',
      'IN3PB',
      'PMNG',
      'PRM31',
      'SC04',
      'MDL3',
      'W38B',
      'MT303',
      'CPF0',
      'FM3U',
      'RSF1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2019', async t => {
  const photos = generate({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH3',
      'AU3P',
      'BC3B',
      'BG31',
      'BT37',
      'CDM0',
      'CH06',
      'COBE',
      'CPF0',
      'DRLH',
      'DV4W',
      'FC3P',
      'FG31',
      'FM3B',
      'GLFR',
      'HL31',
      'HM31',
      'I36M',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MI00',
      'MR31',
      'OSSB',
      'PBSB',
      'PC30',
      'PL30',
      'REEU',
      'RF3G',
      'RS3H',
      'RSF1',
      'S3PB',
      'SA3P',
      'SC04',
      'SLR0',
      'ST31',
      'STCP',
      'SU3C',
      'T3MS',
      'TM00',
      'TW00',
      'UT3P',
      'W38B',
      'WR00',
      'ZINV'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2020', async t => {
  const photos = generate({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3P',
      'AUF1',
      'BC3R',
      'BG32',
      'BT37',
      'CDM0',
      'CH06',
      'CODE',
      'CPF0',
      'DRLH',
      'DV4W',
      'FC01',
      'FG31',
      'FGF1',
      'FM3P',
      'GLFR',
      'HL31',
      'HM30',
      'HP30',
      'I38M',
      'ID3W',
      'IL31',
      'ILF1',
      'LTPB',
      'MDL3',
      'MI01',
      'MR30',
      'OSSB',
      'PC31',
      'PL31',
      'PMNG',
      'PT00',
      'REEU',
      'RF3G',
      'RL31',
      'RS3H',
      'RSF1',
      'S3PB',
      'SA3P',
      'SC04',
      'SLR1',
      'ST30',
      'STCP',
      'SU3C',
      'T3M3',
      'TM00',
      'TW00',
      'UT3P',
      'W32D',
      'WR00',
      'ZINV'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2021', async t => {
  const photos = generate({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3D',
      'BC3B',
      'BT35',
      'RNG0',
      'CDM0',
      'CH15',
      'COIE',
      'DRRH',
      'DV2W',
      'FC02',
      'FG3B',
      'FM3S',
      'GLFR',
      'HL32',
      'HM30',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MR31',
      'PBSB',
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
      'BG30',
      'I36M',
      'OSSB',
      'AUF2',
      'RSF0',
      'ILF0',
      'FGF0',
      'CPF0',
      'HP31',
      'PT01',
      'RL31',
      'APBS',
      'IN3BB',
      'PRM30',
      'MT320'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})
