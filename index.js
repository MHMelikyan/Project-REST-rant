require('dotenv').config()
const express = require('express')
const app =express()


app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT)
//app.listen(8080, console.log('listening on port 8080'))