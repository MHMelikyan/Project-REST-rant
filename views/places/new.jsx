const React = require('react')
const Def = require('../default')

function new_form(){ 
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                    <form method="POST" action="/places">
                        <div className="form-group">
                            <lable htmlFor="name">Place Name</lable>
                            <input className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="form-group" >
                        <lable htmlFor="pic"> Place Picture</lable>
                        <input className="form-control" id="pic" name="pic"/>
                        </div>
                        <div className="form-group">
                            <lable htmlFor="city">City</lable>
                            <input className="form-control" id="city" name="city"/>
                        </div>
                        <div className="form-group">
                            <lable htmlFor="state">State</lable>
                        <input className="form-control"id="state" name="state"/>
                         </div>
                         <div className="form-group" >
                            <lable htmlFor="cuisines">Cuisines</lable>
                            <input className="form-control"id="cuisines" name="cuisines" required/>
                         </div >
                         <input className="btn btn-primary"type="submit" value="Add Place"/>
                    </form>
                
            </main>
        </Def>
    )

}
module.exports = new_form