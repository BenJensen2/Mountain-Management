import React, { useState } from 'react';
import './IncidentForm.css'
import Map2D from '../../views/Map2D'
import GuestInfo from './GuestInfo'

const IncidentForm = () => {

  const [collision, setCollision] = useState(false)

  const collisionHandler = (e) => {
    console.log(e)
    if(e.value == 'collision'){
      setCollision(true)
      console.log("Collision Handler")
    }
  }
  return (
    <div><h1>
      Incident Form
      </h1>
      <form className="card-form" action="">
        {/* Location */}
        {/* <Map2D /> */}
        <div className="location card">
          <div className="card-header">Location</div>
          <div className="card-body">
            <label htmlFor="">Location</label>
            <input type="text" />
          </div>
        </div>
        <hr />
        {/* Incident */}
        <div className="incident card">
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
              <option value="">Solo Incident</option>
              <option value="collision" >Collision</option>
            </select>
            {collision &&
              <select name="" id="">
                <option value="">Guest</option>
                <option value="">Staff</option>
                <option value="">Man Made Feature</option>
                <option value="">Natural Feature</option>
              </select>
            }
            <label htmlFor="collision">collision</label>
            <input type="radio" />
            {/* On Off Toggle */}
            <div className="collision">
              <ul>
                <li>Guest 1 <GuestInfo /> </li>
                <li>Guest 2 <GuestInfo /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Injuries */}
        {/* Treatment */}
        {/* Guest */}
        <div className="guest card">
          <div className="card-header">Guest</div>
          <div className="card-body">

            <label htmlFor="">First Name</label>
            <input type="text" />

            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
        </div>
        <hr />

        {/* Guest History */}
        <div className="history card">
          <label htmlFor="">Riding Level</label>
          <input type="text" />
        </div>
        {/* Release */}
        <div className="release card">
          <label htmlFor="releasedto">Released To:</label>
          <input type="text" />
        </div>
        {/* Conditions */}
        <div className="conditions card">

        </div>
        {/* Patrollers */}
        <div className="patrollers card"></div>
      </form>
    </div>
  )
}

export default IncidentForm