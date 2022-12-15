// module.exports  [{
//     name: 'Olive Garden',
//     city: 'Burlington',
//     state: 'NC',
//     cuisines: 'Italian and American',
//     pic: '/images/olive-garden.jpeg'
// }, {
//     name: 'Caucasus',
//     city: 'Yerevan',
//     state: 'Armenia',
//     cuisines: 'Armenian, Georgian',
//     pic: '/images/kovkas.jpeg'
// }]
const mongoose = require('mongoose')

module.exports.Place = require('./places')

const placeSchema = new mongoose.Schema({
  name: { 
    type: String,
     required: true 
    },
  pic: String,

  cuisines: { 
    type: String, 
    required: true 
},
  city: { 
    type: String, 
    default: 'Anytown'
 },
  state: { 
    type: String,
     default: 'USA' 
    },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)
