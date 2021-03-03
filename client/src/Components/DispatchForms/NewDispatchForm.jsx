import React, { useState, useEffect } from 'react';
import './NewDispatchForm.css'
import axios from 'axios';

const DispatchForm = (props) => {

  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("")
  const [type, setType] = useState("");
  const [runs, setRuns] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentRun, setCurrentRun] = useState("");
  const [location, setLocation] = useState("");
  const [originator, setOriginator] = useState("");
  const [responder, setResponder] = useState("");
  const [equipment, setEquipment] = useState("");

  useEffect(() => {
    getRuns()
  }, [])

  // Sorts runsList Last_Name from a to z
  const sorted = (runsList) => {
    return runsList.sort((a, b) => a.Name.localeCompare(b.Name))
  }

  // Get runs through all Runs api
  const getRuns = () => {
    axios.get("http://localhost:8000/api/allRuns")
      .then(res => {
        setRuns(sorted(res.data))
        setLoaded(true)
        console.log(res.data)
      })
      .catch(err => {
        console.log("We have an error", err)
        // console.log("This is the error", err.message)
        if (err.message === "Network Error") {
          console.log("The database is probably not connected")
        }
      })
  }

  // On form submit, create a new feature
  const clickHandler = (e) => {
    e.preventDefault()
    let newDispatch = {
      Number: number,
      Status: status,
      Type: type,
      Run: currentRun,
      Location: location,
      Originator: originator,
      Responder: responder,
      Equipment: equipment
    }
    console.log("Creating a new dispatch!")
    axios.post("http://localhost:8000/api/dispatch/new", newDispatch)
      .then(res => {
        console.log(res.data)
        window.location.reload()
      })
      .catch(err => {
        console.log("We've got errors")
      })
  }

  return (
      <div className="dispatch-form">
        <ul>
          <li>
            <label>
              Number
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            </label>
          </li>
          <li>
            <label>
              Type
              <select name="" value={type} onChange={e => setType(e.target.value)}>
                <option value="initial">Initial</option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Run
            <input type="text" />
              {/* {loaded &&
                <select value={currentRun} onChange={e => setCurrentRun(e.target.value)} >
                  {runs.map((run) => {
                    <option key={run._id} value={run.Name} >{run.Name}</option>
                  })}
                </select>
              } */}
            </label>
          </li>
          <li>
            <label>
              Location
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
          </li>
          <li>
            <label>
              Originator
              <select name="" value={originator} onChange={e => setOriginator(e.target.value)}>
                <option value="ben">Ben</option>
                <option value="tommy">Tommy</option>
              </select>
            </label>
          </li>
        </ul>
        <button onClick={clickHandler} >Create</button>
      </div>
  )
}

export default DispatchForm;