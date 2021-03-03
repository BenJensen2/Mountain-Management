import React, { useState, useEffect } from 'react';
import './NewLiftForm.css'
import axios from 'axios';

const LiftForm = (props) => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // console.log("Positions", positions)
  })

  // On form submit, create a new lift
  const liftHandler = (e) => {

    e.preventDefault()
    let newLift = {
      Name: name,
      Number: number,
      Location: location,
      Status: status,
    }
    console.log("Creating a new lift!")
    axios.post("http://localhost:8000/api/lift/new", newLift)
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
      <div>
        <ul>
          <li>
            <label>
              Name
            <input number="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
          </li>
          <li>
            <label>
              Number
              <input number="text" value={number} onChange={e => setNumber(e.target.value)} />
            </label>
          </li>
          <li>
            <label>
              Location
            <input number="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
          </li>
          <li>
            <label>
              Status
            <select name="" value={status} onChange={e => setStatus(e.target.value)}>
                <option value="yellow">On Hold</option>
                <option value="green">Open</option>
                <option value="blue">To Be Opened</option>
                <option value="black">Closed</option>
                <option value="doubleBlack">Out for Season</option>
              </select>
            </label>
          </li>
        </ul>
        <button onClick={liftHandler}>Submit</button>
      </div>
    </div>
  )
}

export default LiftForm;