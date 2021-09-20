'use strict'

const test = require('ava')

const generate = require('../../generate')

test('throw an error if model is not supported', t => {
  const error = t.throws(
    () =>
      generate({
        modelLetter: 'z'
      }),
    { instanceOf: TypeError }
  )

  t.is(error.message, "Model 'mz' not supported")
})
