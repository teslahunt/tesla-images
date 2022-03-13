'use strict'

const test = require('ava')

const teslaImages = require('..')

test('throw an error if model is not supported', t => {
  const error = t.throws(
    () =>
      teslaImages({
        modelLetter: 'z'
      }),
    { instanceOf: TypeError }
  )

  t.is(error.message, "Model 'mz' not supported")
})
