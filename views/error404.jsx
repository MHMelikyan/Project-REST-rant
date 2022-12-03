const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p> Ooooops, sorry, we can't find this page!</p>
          
          <div>
            <img src = "/images/stop.jpg" alt = "Stop Sign"/>
          </div>
          <div>
          Photo by <a href="https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Mossholder</a> on <a href="https://unsplash.com/s/photos/wrong-way?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
          </div>

        </main>
        </Def>
    )
}

module.exports = error404