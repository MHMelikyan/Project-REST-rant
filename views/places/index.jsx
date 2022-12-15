const React = require('react')
const Def = require('../default')
function Index (data){
    let placesFormatted = data.places.map((place,) => {
        return(
            //making grid
            <div className="col-sm-6">
    
                <h2>
                    <a href = {`/places/${place.id}`}>
                    {place.name}
                    </a>
                    </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Locared in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>PLACES TO RANT OR RAVE ABOUT</h1>
                <div className="row"> 
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index