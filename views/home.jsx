const React = require('react')
const Def = require('./default')
function Home () {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src = "images/brakefast.jpg" alt = "The Brakefast"/>
                    <div>
                        Photo by <a href = "AUTHOR_LINK"> Brenda Godinez</a> on <a href = "UNSOLASH_LINK">Unspalsh</a>
                    </div>
                </div>
                <a href ="/places">
                    <button className = "btn-primary"> Places Page</button>
                </a>
            </main>
        </Def>
    )
}
module.exports = Home