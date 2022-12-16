const db = require('../moduels')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
}
//Create a fake sample content.
let comment = await db.Comment.create({
    author: 'Famished Fran',
    rant:false,
    stars: 5.0,
    content:'Wow, simply amazing! Highly recomended!'
})
//add that comment to the place's comment array....
place.comment.push(comment.id)

//save the place now
await place.save()

//exit the program
process.exit()

seed()
