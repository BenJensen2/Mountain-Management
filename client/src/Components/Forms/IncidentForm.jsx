import React, { useState } from 'react';
import './IncidentForm.css'
import SingleSelectButtons from '../SingleSelectButtons'
import MultipleSelectButtons from '../MultipleSelectButtons'

const IncidentForm = () => {

  const [activityType, setActivityType] = useState("")
  const [incidentType, setIncidentType] = useState("")
  const [collisionTypes, setCollisionTypes] = useState([])
  let shadowColor = "rgb(201, 10, 17)";

  // Form Handlers
  const incidentFormHandler = (e) => {
    e.preventDefault()
    let incidentFormData = {
      "activityType": activityType,
      "incidentType": incidentType,
      "collisionTypes": collisionTypes
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
              <SingleSelectButtons
                buttons={[
                  ["Skiing", "skiing"],
                  ["Boarding", "boarding"],
                  ["Snow Skating", "snowSkating"],
                  ["Tubing", "tubing"]
                ]}
                currentValue={activityType}
                setValue={setActivityType}
                shadowColor={shadowColor}
              />
            </div>
            <label htmlFor="">Type of Incident</label>
            <div className="collision-types">
              <SingleSelectButtons
                buttons={[
                  ["Solo", "solo"],
                  ["Collision", "collision"]
                ]}
                currentValue={incidentType}
                setValue={setIncidentType}
                shadowColor={shadowColor}
              />
            </div>
            {incidentType === "collision" && <label htmlFor="">Collision with :</label>}
            {incidentType === "collision" &&
              <div className="collision-types">
                <MultipleSelectButtons
                  buttons={[
                    ["Guest", "guest"],
                    ["Staff", "staff"],
                    ["Man Made Feature", "manMade"],
                    ["Natural Feature", "natural"]
                  ]}
                  values={collisionTypes}
                  setValues={setCollisionTypes}
                  shadowColor={shadowColor}
                />
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default IncidentForm