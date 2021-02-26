import React, { useState, useEffect } from 'react';
import './IncidentForm.css'
import SingleSelectButtons from '../SingleSelectButtons'
import MultipleSelectButtons from '../MultipleSelectButtons'
import ContactForm from './ContactForm'
import ResponderForm from './ResponderForm'
import StaffForm from './StaffForm'
import SkiForm from './SkiForm'
import BoardForm from './BoardForm'
import ManMadeFeatureForm from './ManMadeFeatureForm'

const IncidentForm = () => {

  const [activityType, setActivityType] = useState("")
  const [incidentType, setIncidentType] = useState("")
  const [collisionTypes, setCollisionTypes] = useState([])
  const [showFeatures, setShowFeatures] = useState(false)
  let shadowColor = "rgb(201, 10, 17)";

  useEffect(() => {
    if (collisionTypes.includes("manMade") || collisionTypes.includes("natural")) {
      setShowFeatures(true)
    } else { setShowFeatures(false) }
  })

  const collapseBodyHandler = (e) => {
    let currentDisplay = window.getComputedStyle(e.target.nextSibling).getPropertyValue('display')
    if (currentDisplay === "none") {
      e.target.nextSibling.style.display = "block";
    } else {
      e.target.nextSibling.style.display = "none";
    }
  }

  return (
    <div className="incident-form-component">
      <h1>
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
        {/* <form className="incident-form card" action="" onSubmit={incidentFormHandler}> */}
        <div className="card">
          <div className="card-header" onClick={collapseBodyHandler} >Incident</div>
          <div className="card-body">
            <label htmlFor="activity">Activity</label>
            <div className="activity-type">
              <SingleSelectButtons
                buttons={[
                  ["Skiing", "skiing"],
                  ["Boarding", "boarding"],
                  ["Snow Skating", "snowSkating"],
                  ["Tubing", "tubing"]
                ]}
                value={activityType}
                setValue={setActivityType}
                shadowColor={shadowColor}
              />
            </div>
            <label htmlFor="">Type of Incident</label>
            <div className="incident-type">
              <SingleSelectButtons
                buttons={[
                  ["Solo", "solo"],
                  ["Collision", "collision"]
                ]}
                value={incidentType}
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
                  buttonValues={collisionTypes}
                  setButtonValues={setCollisionTypes}
                  shadowColor={shadowColor}
                />
              </div>
            }
          </div>
        </div>
        <div className="card">
          <div className="card-header" onClick={collapseBodyHandler}>Personnel</div>
          <div className="card-body">

            <ContactForm
              title="Guest Info"
              contactType="guest"
            />

            {collisionTypes.includes("guest") &&
              <ContactForm
                title="Second Party"
                contactType="guest"
              />
            }
            {collisionTypes.includes("staff") &&
              <StaffForm />
            }
            <ResponderForm />
          </div>
        </div>
        <div className="card">
          <div className="card-header" onClick={collapseBodyHandler}>Gear</div>
          <div className="card-body">
            {activityType === "skiing" &&
              <SkiForm />
            }
            {activityType === "boarding" &&
              <BoardForm/>
            }
            {activityType === "snowSkating" &&
              <ul>
                <li>Board</li>
                <li>Leash?</li>
              </ul>
            }
            {activityType === "tubing" &&
              <ul>
                <li>Tube Hill</li>
                <li>Guardian</li>
              </ul>
            }
          </div>
        </div>
        {showFeatures &&
          <div className="card">
            <div className="card-header" onClick={collapseBodyHandler}>Features</div>
            <div className="card-body">
              {collisionTypes.includes("manMade") &&
                <ManMadeFeatureForm/>
              }
              {collisionTypes.includes("natural") &&
                <div>Natural Feature</div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default IncidentForm