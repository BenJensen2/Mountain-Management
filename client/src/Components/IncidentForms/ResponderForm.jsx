import React, { useState, useEffect } from 'react';
import './ResponderForm.css'
import axios from 'axios';

const ResponderForm = (props) => {

  const [type, setType] = useState("patrol")
  const [name, setName] = useState("");
  const [comments, setComments] = useState("")

  useEffect(() => {
  })

  // On form submit, create a new member
  const formHandler = (e) => {
    e.preventDefault()
    let newResponder = {
      Type: type,
      Name: name,
      Comments: comments
    }
    axios.post("http://localhost:8000/api/member/new", newResponder)
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
      <div className="info-header" onClick={collapseBodyHandler}>Responder</div>
      <div className="info-body">
        <div className="top-items">
          <div>
            <label htmlFor="">
              Responder Type
                <select name="" id="responderType" value={type} onChange={e => setType(e.target.value)}>
                <option value="patrol">Patrol</option>
                <option value="hillSafety">Hill Safety</option>
                <option value="liftStaff">Lift Staff</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Name
                <input id="responderName" type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
          </div>
        </div>
          <div className="responder-comments">
            <label>
              Comments
                <textarea name="" id="responderComments" value={comments} onChange={e => setComments(e.target.value)}></textarea>
            </label>
        </div>
        <div>
          These are example comments.  Make sure to include wether or not you asked offered an ambulance or not
        </div>
        <br/>
        <div>This could also be enterable upon creation: "Hey remember ..... - Darla"</div>
      </div>
    </div>
  )
}

export default ResponderForm;