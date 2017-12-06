const puppeteer = require('puppeteer');
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Before, Given, When, Then }) => {
  Before({ timeout: 60 * 1000 }, async function testCase() {
    this.browser = await puppeteer.launch()
  })

  Given('I am viewing the dashboard', { timeout: 60 * 1000 }, async function testCase() {
    this.page = await this.browser.newPage()
    await this.page.goto('https://amajor.github.io/dashboard/public/')
  })

  Then('I see the header', async function testCase() {
    await this.page.waitForSelector('h1')

    const headers = await this.page.evaluate(() => {
      const h1s = Array.from(document.querySelectorAll('h1'))
      return h1s.map(title => title.textContent)
    })

    await this.browser.close()
  })
})
