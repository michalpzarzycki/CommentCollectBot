const express = require('express')
const youTube = require('./youtube')

async function startTheParty() {
    await youTube.initialize();
}

startTheParty();