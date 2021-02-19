import React, { useState } from 'react';
import './IncidentForm.css'
import Map2D from '../../views/Map2D'
import GuestInfo from './GuestInfo'

const IncidentForm = () => {

  const [collision, setCollision] = useState(false)

  const collisionHandler = (e) => {
    console.log(e)
    console.log("Value: ", e.target.value)
    if (e.target.value == 'collision') {
      setCollision(true)
      console.log("Collision Handler")
      
    }
    else {
      setCollision(false)
    }
  }

  const selectionHandler = (e) =>{
    console.log("Selection Handler")
  }
  return (
    <div><h1>
      Incident Form
      </h1>

      {/* Location */}
      <form className="location-form" action="">
        {/* <Map2D /> */}
        <div className="location card">
          <div className="card-header">Location</div>
          <div className="card-body">
          </div>
        </div>
      </form>

      <div className="info-cards">
        {/* Incident */}
        <form className="incident-form card" action="">
          <div className="card-header">Incident</div>
          <div className="card-body">
            <label htmlFor="activity">Activity</label>
            <select name="" id="">
              <option value="">Skiing</option>
              <option value="">Boarding</option>
              <option value="">Snow Skating</option>
              <option value="">Tubing</option>
            </select>
            <label htmlFor="">Type of Incident</label>
            <select name="" id="" onClick={collisionHandler}>
              <option value="" onClick={selectionHandler}>Solo Incident</option>
              <option value="collision" onClick={selectionHandler} >Collision</option>
            </select>
            {collision &&
              <select name="" id="">
                <option value="">Guest</option>
                <option value="">Staff</option>
                <option value="">Man Made Feature</option>
                <option value="">Natural Feature</option>
              </select>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default IncidentForm