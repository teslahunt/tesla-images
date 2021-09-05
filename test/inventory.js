'use strict'

const test = require('ava')

const inventory = require('../inventory')

test('provided a VIN that can be resolved', async t => {
  const images = await inventory('5YJSA1H15EFP65786')
  t.true(Array.isArray(images))
  t.true(images.length > 0)
})

test("provided a VIN that can't be resolved", async t => {
  const images = await inventory('5YJSA7H48FF087307', {
    followRedirect: false,
    retry: 0
  })
  t.true(Array.isArray(images))
  t.is(images.length, 0)
})

test('ensure resolved URLs are reachables', async t => {
  const images = await inventory('5YJSA7E29GF144778')
  t.true(Array.isArray(images))
  t.is(images.length, 0)
})
