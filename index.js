
const express = require('express')
require('dotenv').config()
const app =express()

app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/',(req,res) => {
    res.render('home')
})

app.get('*',(req,res)=>{
    res.render('error404')
})
const PORT = process.env.PORT || 8080
//app.listen(process.env.PORT)
app.listen(8080, console.log('listening on port 8080'))