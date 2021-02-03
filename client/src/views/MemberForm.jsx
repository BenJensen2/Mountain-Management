import React, { useState, useEffect } from 'react';
import '../styles/MemberForm.css'
import axios from 'axios';

const MemberForm = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [positions, setPositions] = useState({
    "Director": false,
    "Manager": false,
    "Team Leader": false,
    "Alpine Patroller": false,
    "Base Patroller": false,
    "Hill Safety": false,
    "Candidate": false
  })

  useEffect(() => {
    console.log("Positions", positions)
  })

  // HANDLERS
  const firstNameHandler = (e) => {
    setFirstName(e.target.value)
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
  }

  const emailAddressHandler = (e) => {
    setEmailAddress(e.target.value)
  }

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value)
  }

  // On form submit, create a new member
  const formHandler = (e) => {
    // Handling checkboxes
    let positionEntries = Object.entries(positions)
    let positionsArray = [];
    for (let i = 0; i < positionEntries.length; i++) {
      console.log(positionEntries[i][0], positionEntries[i][1])
      if (positionEntries[i][1]===true){
        positionsArray.push(positionEntries[i][0])
      }
    }
    console.log(positionsArray)


    e.preventDefault()
    let newMember = {
      First_Name: firstName,
      Last_Name: lastName,
      Email_Address: emailAddress,
      Phone_Number: phoneNumber,
      Position: positionsArray
    }
    console.log("Creating a new member!")
    axios.post("http://localhost:8000/api/member/new", newMember)
      .then(res => {
        console.log(res.data)
        window.location.reload()
      })
      // ,then()
      .catch(err => {
        console.log("We've got errors")
        // console.log("Error",
        // err.response.data.errors)
        // console.log("Error",
        // err.response.data.errors.name.properties.message)
        // setErrors(err.response.data.errors.name.properties.message)
      })

    // Axios post to new member

  }
  const checkboxHandler = (e) => {
    console.log("Checkbox Handler")
    console.log(`${e.target.id} has been checked`)
    let position = e.target.id;
    positions[`${position}`] = true
    console.log(position, positions)
    setPositions(positions)
    console.log("Checkbox Handler End")
  }

  const logPositions = (e) => {
    e.preventDefault()
    console.log("Current Positions", positions)
    console.log(Object.entries(positions))
    let positionEntries = Object.entries(positions)
    let positionsArray = [];
    for (let i = 0; i < positionEntries.length; i++) {
      console.log(positionEntries[i][0], positionEntries[i][1])
      if (positionEntries[i][1]===true){
        positionsArray.push(positionEntries[i][0])
      }
    }
    console.log(positionsArray)
  }


  return (
    <div>
      <form onSubmit={formHandler}>
        <ul>
          <li>
            <label>
              First Name
            <input type="text" value={firstName} onChange={firstNameHandler} />
            </label>
          </li>
          <li>
            <label>
              Last Name
            <input type="text" value={lastName} onChange={lastNameHandler} />
            </label>
          </li>
          <li>
            <label>
              Email Address
            <input type="text" value={emailAddress} onChange={emailAddressHandler} />
            </label>
          </li>
          <li>
            <label>
              Phone Number
            <input type="tel" value={phoneNumber} onChange={phoneNumberHandler} />
            </label>
          </li>
          <li>
            <ul>
              <li>
                <label className="positions-label">Positions</label>
              </li>
              <li>
                <input type="checkbox" id="Director" onChange={checkboxHandler} />
                <label className="positions-type">Director</label>
              </li>
              <li>
                <input type="checkbox" id="Manager" onChange={checkboxHandler} />
                <label className="positions-type">Manager</label>
              </li>
              <li>
                <input type="checkbox" id="Team Leader" onChange={checkboxHandler} />
                <label className="positions-type">Team Leader</label>
              </li>
              <li>
                <input type="checkbox" id="Alpine Patroller" onChange={checkboxHandler} />
                <label className="positions-type">Alpine Patroller</label>
              </li>
              <li>
                <input type="checkbox" id="Base Patroller" onChange={checkboxHandler} />
                <label className="positions-type">Base Patroller</label>
              </li>
              <li>
                <input type="checkbox" id="Hill Safety" onChange={checkboxHandler} />
                <label className="positions-type">Hill Safety</label>
              </li>
              <li>
                <input type="checkbox" id="Candidate" onChange={checkboxHandler} />
                <label className="positions-type">Candidate</label>
              </li>
              <li>
                <button onClick={logPositions} >
                  Log Positions
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <input className="submit-button" type="submit" />
      </form>
    </div>
  )
}

export default MemberForm;