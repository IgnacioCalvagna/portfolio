import React from 'react'
import '../assets/css/modale.css'
const Modal1 = ( { p } ) => {
    console.log("P desde modal",p)

    // const {titulo,img,description} = p
  return (
   <>
    <div className="modal fade miModal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog" >
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title miModale" id="exampleModalLabel">{p?p.titulo:null}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body miModale">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Modal1