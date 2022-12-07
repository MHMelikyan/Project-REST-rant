const router = require('express').Router()
router.get('/', (req, res) =>{

    let places = [{
        name: 'Olive Garden',
        city: 'Burlington',
        state: 'NC',
        cuisines: 'Italian and American',
        pic: '/images/olive-garden.jpeg'
    }, {
        name: 'Caucasus',
        city: 'Yerevan',
        state: 'Armenia',
        cuisines: 'Armenian, Georgian',
        pic: '/images/kovkas.jpeg'
    }]


    res.render('places/index',{places})
})

// GET: new places
router.get('/new', (req,res)=> {
    res.render('places/new')
})
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  

module.exports = router

