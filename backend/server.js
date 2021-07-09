const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users')
const commentsRouter = require('./routes/comments')
require('dotenv').config();


const PORT = process.env.PORT || 8000;
const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV = 'development') {
    app.use(cors(process.env.CLIIENT_URL))
}
app.use('/api', usersRouter)
app.use('/api', commentsRouter)


app.listen(PORT, () => {
    console.log("PORT", PORT)
})


