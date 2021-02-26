import React, { useState, useEffect } from 'react';
import './NewFeatureForm.css'
import axios from 'axios';

const FeatureForm = (props) => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [runs, setRuns] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentRun, setCurrentRun] = useState("");
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");

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
  const formHandler = (e) => {




    e.preventDefault()
    let newFeature = {
      Name: name,
      Type: type,
      Run: currentRun,
      Location: location,
      Difficulty: difficulty,
    }
    console.log("Creating a new feature!")
    axios.post("http://localhost:8000/api/feature/new", newFeature)
      .then(res => {
        console.log(res.data)
        window.location.reload()
      })
      .catch(err => {
        console.log("We've got errors")
      })
  }

  return (
    <div>
      <form className="feature-form" onSubmit={formHandler}>
        <ul>
          <li>
            <label>
              Name
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
          </li>
          <li>
            <label>
              Type
              <select name="" value={type} onChange={e => setType(e.target.value)}>
                <option value="roller">Roller</option>
                <option value="kicker">Kicker</option>
                <option value="jump">Jump</option>
                <option value="wall">Wall</option>
                <option value="box">Box</option>
                <option value="tunnel">Tunnel</option>
                <option value="rail">Rail</option>
                <option value="lollipop">Lollipop</option>
                <option value="other">Other</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Runs
              <ul>
                {/* {runs.map((run) => {
                  <li>{run.Name}</li>
                })} */}
              </ul>
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
              Difficulty
              <select name="" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                <option value="yellow">Learning (Yellow)</option>
                <option value="green">Easy (Green)</option>
                <option value="blue">Moderate (Blue)</option>
                <option value="black">Difficult (Black)</option>
                <option value="doubleBlack">Extremely Difficult (DoubleBlack)</option>
              </select>
            </label>
          </li>
        </ul>
        <input className="submit-button" type="submit" />
      </form>
    </div>
  )
}

export default FeatureForm;