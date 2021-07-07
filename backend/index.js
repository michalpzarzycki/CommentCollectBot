const express = require('express')
const youTube = require('./youtube')

async function startTheParty() {
    await youTube.initialize();
    await youTube.acceptCookies();
    await youTube.searchVideo("nyan cat")
    await youTube.getComments()
}

startTheParty();
