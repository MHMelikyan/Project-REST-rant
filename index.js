// Modules and Globals
const express = require('express')

const mongoose = require('mongoose')
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

//DB connect
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>console.log('DB connected'))
 .catch(err =>console.error(err));

const PORT = process.env.PORT || 8080
//app.listen(process.env.PORT)
app.listen(8080, console.log('listening on port 8080'))