const router = require('express').Router()
const places = require('../modules/places.js')
router.get('/', (req, res) =>{ 
    res.render('places/index',{places})
})

// GET: new places
router.get('/new', (req,res)=> {
    res.render('places/new')
})
//POST: place
router.post('/', (req, res)=>{
    console.log(req.body)
    
    if(!req.body.pic){
        //default image if one is not provided
        req.body.pic='http://placekitten.com/400/400'
    }
    if(!req.body.city){
        req.body.city='Anytown'
    }
    if(!req.body.state){
        req.body.state ="USA"
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

module.exports = router

