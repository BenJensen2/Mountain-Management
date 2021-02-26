import React, { useState, useEffect } from 'react';
import './FeatureForm.css'
import axios from 'axios';

const FeatureForm = (props) => {

  const [fetures, setFeatures] = useState("")
  const [loaded, setLoaded] = useState(false)
  const [type, setType] = useState("patrol")
  const [name, setName] = useState("");
  const [comments, setComments] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/api/allFeatures")
      .then(res => {
        console.log(res.data)
        setFeatures(res.data)
        setLoaded(true)
      })
      .catch(err => {
        console.log("We've got errors")
      })
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
    <div className="info">
      <div className="info-header" onClick={collapseBodyHandler}>Man-made Feature</div>
      <div className="info-body">
        <div className="top-items">
          <div>
            <label htmlFor="">
              Feature Type
                <select name="" value={type} onChange={e => setType(e.target.value)}>
                <option value="tree">Tree</option>
                <option value="rock">Rock</option>
                <option value="bush">Bush</option>
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
        <br />
        <div>This could also be enterable upon creation: "Hey remember ..... - Darla"</div>
      </div>
    </div>
  )
}

export default FeatureForm;