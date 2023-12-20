'use strict'

const reachableUrl = require('reachable-url')
const createBrowser = require('browserless')
const { onExit } = require('signal-exit')
const pMap = require('p-map')

const browser = () =>
  Promise.resolve(
    this.instance ||
      (this.instance = (() => {
        const browser = createBrowser({ puppeteer: require('puppeteer') })
        onExit(browser.close)
        return browser
      })())
  ).then(browser => browser.createContext())

const isReachable = async url => {
  const browserless = await browser()
  const ping = browserless.evaluate(async (_, response) => ({
    statusCode: response.status()
  }))
  const result = await ping(url)
  await browserless.destroyContext()
  return reachableUrl.isReachable(result)
}

const isAllReachable = async urls => {
  const results = await pMap(urls, isReachable)
  return results.every(url => url === true)
}

module.exports = {
  isReachable,
  isAllReachable
}
