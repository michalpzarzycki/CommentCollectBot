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
    },
    acceptCookies: async () => {
        await youTube.page.waitFor(1000)

        let [span] = await youTube.page.$x('//span[contains(text(), "Zgadzam się")]')

        if (span) {
            await span.click();
        }
        await youTube.page.waitFor(3000)
    },
    searchVideo: async (videoTitle) => {

        await youTube.page.waitForFunction('document.querySelector("#search-icon-legacy")');
        await youTube.page.type('input[name="search_query"]', videoTitle, { delay: 50 })
        let [searchButton] = await youTube.page.$$('#search-icon-legacy');
        if (searchButton) {
            await searchButton.click()
        }
        await youTube.page.waitFor(3000)

        await youTube.page.evaluate(async () => {
            let elements = document.querySelector('#video-title > yt-formatted-string');
            console.log(elements)
            if (elements) {
                console.log("FOUND")
                elements.click();
            }

        });
        await youTube.page.waitFor(2000)

        async function scrollBottom() {


            await youTube.page.evaluate(() => document.scrollingElement.scrollBy(0, 1000))
            await youTube.page.waitFor(2000)
            await youTube.page.evaluate(() => document.scrollingElement.scrollBy(1000, 2000))
            await youTube.page.waitFor(2000)
            await youTube.page.evaluate(() => document.scrollingElement.scrollBy(2000, 3000))
            await youTube.page.waitFor(2000)
            await youTube.page.evaluate(() => document.scrollingElement.scrollBy(3000, 4000))
            await youTube.page.waitFor(2000)
            await youTube.page.evaluate(() => document.scrollingElement.scrollBy(4000, 5000))
            await youTube.page.waitFor(2000)
            await youTube.page.evaluate(() => document.scrollingElement.scrollBy(5000, 6000))

        }
        await scrollBottom()
    }

}