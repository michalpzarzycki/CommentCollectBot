const fs = require('fs');

const puppeteer = require('puppeteer');
const BASE_URL = 'https://youtube.com'

module.exports = youTube = {

    browser: null,
    page: null,
    comments: {},
    users: {},
    initialize: async () => {
        youTube.browser = await puppeteer.launch({
            headless: false
        })
        youTube.page = await youTube.browser.newPage();

    },
    goToURL: async (url) => {
        await youTube.page.goto(url, { waitUntil: 'networkidle2' })

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
        await youTube.page.waitForFunction('document.querySelector("#video-title > yt-formatted-string")');

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
    },
    getComments: async () => {

        await youTube.page.waitForFunction('document.querySelector("#contents")');
        const users = await youTube.page.$$eval('#author-text > span', _users => {
            let arr = []
            _users.map(x => arr.push(x.innerText))
            return arr
        });
        const comments = await youTube.page.$$eval('#content-text', _comments => {
            let arr = []
            _comments.map(x => arr.push(x.innerText))
            return arr
        });

        return { comments, users }

    },
    saveCommentsAndUsers: async (comments, users) => {

        fs.writeFile('./users.json', JSON.stringify(JSON.stringify({ ...users })), (err) => {
            if (err) throw err
            console.log("DONE")
        })
        fs.writeFile('./comments.json', JSON.stringify(JSON.stringify({ ...comments })), (err) => {
            if (err) throw err
            console.log("DONE")
        })


    }
    ,
    readFiles: async () => {
        fs.readFile('./users.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
                return err
            }
            let parsed = JSON.parse(JSON.parse(data))
            console.log(parsed)

            Object.keys(parsed).forEach(x => console.log(parsed[x]))
        })
    }

}