const React = require('react')
const Def = require('../default')

function new_form(data){ 
    let massage = ''
    if(data.massage){
        massage =(
            <h4 className="alert-danger">
                {data.massage}
            </h4>
        ) }

    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {massage}
                    <form method="POST" action="/places">
                        <div className="form-group col-sm-4">
                            <lable htmlFor="name">Place Name</lable>
                            <input className="form-control"
                             id="name" 
                             name="name" 
                             required/>
                        </div>
                        <div className="form-group col-sm-4" >
                        <lable htmlFor="pic"> Place Picture</lable>
                        <input className="form-control" 
                        id="pic" 
                        name="pic"/>
                        </div>
                        <div className="form-group col-sm-4">
                            <lable htmlFor="city">City</lable>
                            <input className="form-control" 
                            id="city" 
                            name="city"/>
                        </div>
                        <div className="form-group col-sm-4">
                            <lable htmlFor="state">State</lable>
                        <input className="form-control"
                        id="state" 
                        name="state"/>
                         </div>
                         <div className="form-group col-sm-4" >
                            <lable htmlFor="cuisines">Cuisines</lable>
                            <input className="form-control"
                            id="cuisines" 
                            name="cuisines" 
                            required/>
                         </div >
                         <div className="form-group col-sm-4">
                         <label htmlFor="founded">Founded Year</label>
                        <input
                        type="number" 
                        className="form-control" 
                        id="founded" 
                        name="founded"
                        value={new Date().getFullYear()} /> 
                         </div>

                         <input className="btn btn-primary"
                         type="submit" 
                         value="Add Place"/>
                    </form>
                
            </main>
        </Def>
    )

}
module.exports = new_form