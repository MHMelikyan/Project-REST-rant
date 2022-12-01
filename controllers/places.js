const router = require('express').Router()
router.get('/', (req, res) =>{

    let places = [{
        name: 'John Washington',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'American',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'City Burgers',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Burgers',
        pic: 'http://placekitten.com/250/250'
    }]


    res.render('places/index',{places})
})

module.exports = router

