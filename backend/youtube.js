const puppeteer = require('puppeteer');
const BASE_URL = 'https://youtube.com'

module.exports = youTube = {
    browser: null,
    page: null,
    initialize: async () => {
        youTube.browser = await puppeteer.launch({
            headless: false
        })
        youTube.page = await youTube.browser.newPage();

        await youTube.page.goto(BASE_URL, { waitUntil: 'networkidle2' })
    }
}