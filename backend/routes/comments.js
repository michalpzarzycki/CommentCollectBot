const express = require('express');
const router = express.Router()
const fs = require('fs')


router.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return err
        }
        let parsed = JSON.parse(JSON.parse(data))
        console.log(parsed)
        res.json(parsed)

    })

})



module.exports = router;