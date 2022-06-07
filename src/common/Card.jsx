import React from 'react'
import inWorking from "../assets/img/inWorking.jpg";
import Modal1 from '../components/Modal1';
import '../assets/css/card.css'
const Card = ({p}) => {
  return (
    <>
         <div className="col-4 miCard" >
              <div className="card" key={p.id}>
                <div className="card-header">
                  <h3>
                    <strong> {p.titulo} </strong>
                  </h3>
                </div>
                <div>
                  <img src={inWorking} className="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                   {p.description}
                  </p>
                  <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // data-bs-whatever={`${p?.titulo}`} 
                  >
                    Ver mas ...
                  </button>
                </div>
                <Modal1 p={p} />
                
              </div>
            </div>

    </>
  )
}

export default Card