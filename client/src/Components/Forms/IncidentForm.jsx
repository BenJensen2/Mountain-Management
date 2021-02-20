import React, { useState } from 'react';
import './IncidentForm.css'

const IncidentForm = () => {

  const [activityType, setActivityType] = useState("")
  const [incidentType, setIncidentType] = useState("")
  const [collision, setCollision] = useState(false)
  const [collisionType, setCollisionType] = useState("")

  const buttonHandler = (e) => {
    console.log(e.target.value, "Button", e.target, e.target.className)
    let currentClass = e.target.className
    console.log(typeof currentClass)
    e.target.className += " button-selected";
    // e.target.style = {
    //   box-shadow: "2px 2px 8px #888888";
    // }
  }

  const activityTypeHandler = (e) => {
    buttonHandler(e)
    console.log("Activity Type: ", e.target.value)
    setActivityType(e.target.value)
    // need single activity type validation
  }


  const collisionHandler = (e) => {
    buttonHandler(e)
    console.log("Type of Incident: ", e.target.value)
    if (e.target.value === 'collision') {
      setCollision(true)
    }
    else {
      setCollision(false)
    }
    setIncidentType(e.target.value)
  }

  const collisionTypeHandler = (e) => {
    buttonHandler(e)
    console.log("Collision Type: ", e.target.value)
    setCollisionType(e.target.value)
  }

  // Form Handlers
  const incidentFormHandler = (e) => {
    e.preventDefault()
    let incidentFormData = {
      "activityType": activityType,
      "incidentType": incidentType,
      "collision": collision,
      "collisionType": collisionType
    }
    console.log("Incident Form Data: ", incidentFormData)
  }

  return (
    <div className="incident-form-component" ><h1>
      Incident Form
      </h1>

      {/* Location */}
      <form className="location-form" action="">
        {/* <Map2D /> */}
        <div className="location">
          <div className="card-header">Location</div>
          <div className="card-body">
          </div>
        </div>
      </form>

      <div className="info-cards">
        {/* Incident */}
        <form className="incident-form card" action="" onSubmit={incidentFormHandler}>
          <div className="card-header">Incident</div>
          <div className="card-body">
            <label htmlFor="activity">Activity</label>
            <div className="activity-types">
              <button type="button" className="activity-type selector-button" onClick={activityTypeHandler} value="skiing">Skiing</button>
              <button type="button" className="activity-type selector-button" onClick={activityTypeHandler} value="boarding">Boarding</button>
              <button type="button" className="activity-type selector-button" onClick={activityTypeHandler} value="snowSkating">Snow Skating</button>
              <button type="button" className="activity-type selector-button" onClick={activityTypeHandler} value="tubing">Tubing</button>
            </div>
            <label htmlFor="">Type of Incident</label>
            <div className="collision-types">
              <button type="button" className="selector-button" onClick={collisionHandler} value="solo" >Solo</button>
              <button type="button" className="selector-button" onClick={collisionHandler} value="collision" >Collision</button>
            </div>
            {collision && <label htmlFor="">Collision with :</label>}
            {collision &&
              <div className="collision-types">
                <button type="button" className="selector-button" onClick={collisionTypeHandler} value="guest" >Guest</button>
                <button type="button" className="selector-button" onClick={collisionTypeHandler} value="staff" >Staff</button>
                <button type="button" className="selector-button" onClick={collisionTypeHandler} value="manMade" >Man Made Feature</button>
                <button type="button" className="selector-button" onClick={collisionTypeHandler} value="natural" >Solo</button>
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default IncidentForm