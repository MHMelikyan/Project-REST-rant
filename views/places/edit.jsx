const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
  return(
    <Def>
        <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                        <div classname = "row">
                            <div className="form-group col-sm-6">
                            <lable htmlFor="name">Place Name</lable>
                            <input className="form-control" 
                            id="name"
                             name="name" 
                             value = {data.place.name}
                             required/>
                        </div>
                        <div className="form-group col-sm-6" >
                        <lable htmlFor="pic"> Place Picture</lable>
                        <input className="form-control"
                             id="pic"
                            name="pic"/>
                        </div>
                        
                         
                        <div className="form-group col-sm-6">
                            <lable htmlFor="city">City</lable>
                            <input className="form-control"
                             id="city"
                             name="city"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <lable htmlFor="state">State</lable>
                        <input className="form-control"
                        id="state" 
                        name="state"/>
                         </div>
                         <div className="form-group col-sm-6" >
                            <lable htmlFor="cuisines">Cuisines</lable>
                            <input className="form-control"
                            id="cuisines" 
                            name="cuisines" 
                            required/>
                        </div>
                         </div >
                         <input className="btn btn-primary"
                         type="submit" 
                         value="Add Place"/>

                        
                    </form>
        </main>
    </Def>
  )
}

module.exports = edit_form