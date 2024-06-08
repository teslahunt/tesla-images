'use strict'

const reachableUrl = require('reachable-url')
const createBrowser = require('browserless')
const { withLock } = require('superlock')
const { onExit } = require('signal-exit')
const pMap = require('p-map')

const teslaImages = require('..')

const lock = withLock(50)

const browser = () =>
  Promise.resolve(
    this.instance ||
      (this.instance = (() => {
        const browser = createBrowser({ puppeteer: require('puppeteer') })
        onExit(browser.close)
        return browser
      })())
  ).then(browser => browser.createContext())

const isReachable = async url =>
  lock(async () => {
    const browserless = await browser()
    const ping = browserless.evaluate(async (_, response) => ({
      statusCode: response.status()
    }))
    const result = await ping(url)
    await browserless.destroyContext()
    return reachableUrl.isReachable(result)
  })

const isAllReachable = async urls => {
  const results = await pMap(urls, isReachable)
  return results.every(url => url === true)
}

const withHandDrive = (test, title, { modelLetter, optionCodes }) => {
  ;['', 'DRLH', 'DRRH'].forEach(handDrive => {
    test(`${title} ${handDrive}`.trim(), async t => {
      const photos = teslaImages({
        modelLetter,
        optionCodes: optionCodes.concat(handDrive).filter(Boolean)
      })
      t.true(await isAllReachable(photos))
      if (handDrive) photos.every(photo => t.true(photo.includes(handDrive)))
      t.snapshot(photos)
    })
  })
}

module.exports = { withHandDrive, isAllReachable }
