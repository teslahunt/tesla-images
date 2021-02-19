'use strict'

const inventory = require('./inventory')
const generate = require('./generate')

module.exports = async ({ vin, modelLetter, optionCodes, gotOpts }) => {
  // get from Tesla inventory backend images
  const inventoryImages = await inventory(vin, { gotOpts })
  if (inventoryImages.length > 0) return inventoryImages

  // otherwise, generate using Tesla 3D visualization
  return generate({ modelLetter, optionCodes })
}
