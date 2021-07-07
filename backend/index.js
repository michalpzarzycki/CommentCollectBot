const express = require('express')
const youTube = require('./youtube')

async function startTheParty() {
    let arrayOfSearch = ['selena gomez', 'funny videos', 'cats', 'dogs', 'anime', 'HAHAHA']
    await youTube.initialize();
    for (const search of arrayOfSearch) {
        await youTube.goToURL('https://youtube.com')
        await youTube.acceptCookies();
        await youTube.searchVideo(search)
        await youTube.getComments()
    }

}

startTheParty();
