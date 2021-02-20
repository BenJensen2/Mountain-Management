import React, { useState } from 'react';
import './IncidentForm.css'
import SelectButtons from '../SelectButtons'

const IncidentForm = () => {

  const [activityType, setActivityType] = useState("")
  const [incidentType, setIncidentType] = useState("")
  const [collision, setCollision] = useState(false)
  const [collisionType, setCollisionType] = useState("")

  const buttonHandler = (e) => {
    // console.log(e.target.style, e.target.boxShadow)
    // let currentShadow = e.target.style.boxShadow;
    // if (e.target.style.boxShadow == "rgb(201, 10, 17) 2px 2px 8px") {
    //   console.log("Has box shadow")
    //   e.target.style.boxShadow = ""
    // } else {
    //   console.log("Doesn't have shadow")
    //   e.target.style.boxShadow = "rgb(201, 10, 17) 2px 2px 8px"
    // }
  }

  const collisionHandler = (e) => {
    buttonHandler(e)
    // console.log("Type of Incident: ", e.target.value)
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
    // console.log("Collision Type: ", e.target.value)
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
              <SelectButtons
                buttons={[
                  ["Skiing", "skiing"],
                  ["Boarding", "boarding"],
                  ["Snow Skating", "snowSkating"],
                  ["Tubing", "tubing"]
                ]}
                setValue={setActivityType}
                shadowColor={"rgb(201, 10, 17)"}
              />
            </div>
            <label htmlFor="">Type of Incident</label>
            <div className="collision-types">
              <button type="button" className="selector-button unselected" onClick={collisionHandler} value="solo" >Solo</button>
              <button type="button" className="selector-button unselected" onClick={collisionHandler} value="collision" >Collision</button>
            </div>
            {collision && <label htmlFor="">Collision with :</label>}
            {collision &&
              <div className="collision-types">
                <button type="button" className="selector-button unselected" onClick={collisionTypeHandler} value="guest" >Guest</button>
                <button type="button" className="selector-button unselected" onClick={collisionTypeHandler} value="staff" >Staff</button>
                <button type="button" className="selector-button unselected" onClick={collisionTypeHandler} value="manMade" >Man Made Feature</button>
                <button type="button" className="selector-button unselected" onClick={collisionTypeHandler} value="natural" >Solo</button>
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default IncidentForm