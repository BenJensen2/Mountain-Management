import React, { useState, useEffect } from 'react';
import './NewRunForm.css'
import axios from 'axios';

const RunForm = (props) => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    // console.log("Positions", positions)
  })

  // On form submit, create a new run
  const formHandler = (e) => {

    e.preventDefault()
    let newRun = {
      Name: name,
      Location: location,
      Difficulty: difficulty,
    }
    console.log("Creating a new run!")
    axios.post("http://localhost:8000/api/run/new", newRun)
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
      <form className="run-form" onSubmit={formHandler}>
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
                <option value="groomed">Groomed</option>
                <option value="backCountry">Backcountry</option>
                <option value="tubing">Tubing</option>
              </select>
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

export default RunForm;