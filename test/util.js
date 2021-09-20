'use strict'

const reachableUrl = require('reachable-url')
const pMap = require('p-map')

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

module.exports = {
  isReachable,
  isAllReachable
}
