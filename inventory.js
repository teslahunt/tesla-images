'use strict'

const reachableUrl = require('reachable-url')
const pReflect = require('p-reflect')
const cheerio = require('cheerio')

const got = require('got')

/* https://backwebs.homenetinc.com/tesla/all-used-vehicles.asp */
const inventoryImages = got.extend({
  prefixUrl: 'https://backwebs.homenetinc.com/tesla/details/@/'
})

const fromInventory = (vin, gotOpts) =>
  inventoryImages(`${vin}/`, {
    resolveBodyOnly: true,
    ...gotOpts
  })

module.exports = async (vin, gotOpts) => {
  const { value: body = '' } = await pReflect(fromInventory(vin, gotOpts))

  const $ = cheerio.load(body)

  const imageUrls = $('a.open-photoviewer-prettyphoto')
    .map(function () {
      return $(this).attr('href')
    })
    .get()

  return (
    await Promise.all(
      imageUrls.map(async url => {
        const res = await reachableUrl(url)
        if (reachableUrl.isReachable(res)) return res.url
        return null
      })
    )
  ).filter(Boolean)
}
