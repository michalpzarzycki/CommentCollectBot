const youTube = require('./youtube')



async function startTheParty() {
    let arrayOfSearch = ['golazo', 'funny', 'love', 'meme', 'ariana', 'pol']
    await youTube.initialize();
    let usersArr = []
    let commentsArr = []
    for (const search of arrayOfSearch) {
        await youTube.goToURL('https://youtube.com')
        await youTube.acceptCookies();
        await youTube.searchVideo(search)
        const { comments, users } = await youTube.getComments()
        usersArr.push(...users)
        commentsArr.push(...comments)
    }
    console.log("USERS : ", usersArr, "COMS: ", commentsArr)
    await youTube.saveCommentsAndUsers(commentsArr, usersArr)
    // readFiles()

}

startTheParty();


