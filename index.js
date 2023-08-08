const {connectionUrl} = require('./data.js')
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(connectionUrl)
        app.listen(PORT, () => console.log(`server started at port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()