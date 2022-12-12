// Modules and Globals
const express = require('express')
require('dotenv').config()
const methodOverride = require('method-override')
const app=express()


//Express Settings
//app.set('views', __dirname + 'views')
app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


// Controller and Routes
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