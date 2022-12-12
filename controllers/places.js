const router = require('express').Router()
const places = require('../modules/places.js')
router.get('/', (req, res) =>{ 
    console.log(places)
    res.render('places/index',{places})
})

//GET: Show
router.get('/:id', (req,res)=>{
    let id = Number(req.params.id)
    if(isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id],id})
    }
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
  //DELETE: 

  router.delete('/id',(req, res) =>{
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.render('error404')
    }
    else if (!place[id]){
        res.render('error404')
    }
    else{
        places.sploce(id,1)
        res.send('/places')
       }
  })

module.exports = router

