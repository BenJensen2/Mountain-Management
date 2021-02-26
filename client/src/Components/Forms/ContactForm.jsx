import React, { useState, useEffect } from 'react';
import './ContactForm.css'
import axios from 'axios';

const ContactForm = ({ title, contactType }) => {

  const [ticketNumber, setTicketNumber] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [occupation, setOccupation] = useState("");
  // const [needsCorrectiveLenses, setNeedsCorrectiveLenses] = useState("");
  // const [wearingCorrectiveLenses, setWearingCorrectiveLenses] = useState("");

  useEffect(() => {
  })

  // On form submit, create a new member
  const formHandler = (e) => {
    e.preventDefault()
    let newMember = {
      First_Name: firstName,
      Last_Name: lastName,
      Email_Address: email,
      Phone_Number: phoneNumber,
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

  const collapseBodyHandler = (e) => {
    let currentDisplay = window.getComputedStyle(e.target.nextSibling).getPropertyValue('display')
    if (currentDisplay === "none") {
      e.target.nextSibling.style.display = "block";
    } else {
      e.target.nextSibling.style.display = "none";
    }
  }


  return (
    <div className="info" onSubmit={formHandler}>
      <div className="info-header" onClick={collapseBodyHandler}>{title}</div>
      <div className="info-body">
        <div className="top-item text-input">
          <label>
            Ticket #
            <input type="text" value={ticketNumber} onChange={e => setTicketNumber(e.target.value)} />
          </label>
        </div>
        <div className="inputs">
          <div className="column-1">
            <div className="form-item text-input">
              <label>
                First
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Last
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Phone
                <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Email
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
            </div>
          </div>
          <div className="column-2">
            <div className="form-item text-input">
              <label>
                Address
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
              </label>
            </div>
            <div className="city-state">
              <div className="form-item text-input" id="contact-city">
                <label>
                  City
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
                </label>
              </div>
              <div className="form-item text-input" id="contact-state">
                <label>
                  State
                <input type="text" value={state} onChange={e => setState(e.target.value)} />
                </label>
              </div>
            </div>
            <div className="country-zip">
              <div className="form-item text-input" id="contact-country">
                <label>
                  Country
                <input type="text" value={country} onChange={e => setCountry(e.target.value)} />
                </label>
              </div>
              <div className="form-item text-input" id="contact-zip">
                <label>
                  Zip
                <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
                </label>
              </div>
            </div>
            <div className="form-item text-input">
              <label>
                Occupation
                <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;