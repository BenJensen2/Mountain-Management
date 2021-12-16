import React, { useState, useEffect } from 'react';
import './BoardForm.css'
import axios from 'axios';

const BoardForm = () => {


  // Board Info
  const [boardIDNumber, setBoardIDNumber] = useState("")
  const [boardOwnedBy, setBoardOwnedBy] = useState("");
  const [boardShopName, setBoardShopName] = useState("");
  const [boardLastAdjustment, setBoardLastAdjustment] = useState("");
  const [boardMake, setBoardMake] = useState("");
  const [boardModel, setBoardModel] = useState("");
  const [boardSize, setBoardSize] = useState("");
  const [boardRemovedBy, setBoardRemovedBy] = useState("");
  const [boardReleasedTo, setBoardReleasedTo] = useState("");

  // Binding Info
  const [bindingIDNumber, setBindingIDNumber] = useState("")
  const [bindingOwnedBy, setBindingOwnedBy] = useState("");
  const [bindingShopName, setBindingShopName] = useState("");
  const [bindingLastAdjustment, setBindingLastAdjustment] = useState("");
  const [bindingMake, setBindingMake] = useState("");
  const [bindingModel, setBindingModel] = useState("");
  const [bindingSize, setBindingSize] = useState("");
  const [bindingRemovedBy, setBindingRemovedBy] = useState("");
  const [bindingReleasedTo, setBindingReleasedTo] = useState("");

  // Boot Info
  const [bootIDNumber, setBootIDNumber] = useState("")
  const [bootOwnedBy, setBootOwnedBy] = useState("");
  const [bootShopName, setBootShopName] = useState("");
  const [bootLastAdjustment, setBootLastAdjustment] = useState("");
  const [bootMake, setBootMake] = useState("");
  const [bootModel, setBootModel] = useState("");
  const [bootSize, setBootSize] = useState("");
  const [bootRemovedBy, setBootRemovedBy] = useState("");
  const [bootReleasedTo, setBootReleasedTo] = useState("");

  useEffect(() => {
  })

  // On form submit, create a new member
  const formHandler = (e) => {
    e.preventDefault()
    let newMember = {
      First_Name: boardMake,
      Last_Name: boardModel,
      Email_Address: boardOwnedBy,
      Phone_Number: boardRemovedBy,
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
      <div className="info-header" onClick={collapseBodyHandler}>Board Setup</div>
      <div className="info-body">

        <br /><br /><br />
        <div> {/* Board Info */}
          <div>Board</div>
          <br />
          <div className="column-1">
            <div className="form-item text-input">
              <label>
                ID Number
                <input type="text" value={boardIDNumber} onChange={e => setBoardIDNumber(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Shop Name
                <input type="text" value={boardShopName} onChange={e => setBoardShopName(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Make
                <input type="text" value={boardMake} onChange={e => setBoardMake(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Size
                <input type="text" value={boardSize} onChange={e => setBoardSize(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Removed By
                <input type="tel" value={boardRemovedBy} onChange={e => setBoardRemovedBy(e.target.value)} />
              </label>
            </div>

          </div>
          <div className="column-2">
            <div className="form-item text-input">
              <label>
                Owned By
                <input type="text" value={boardOwnedBy} onChange={e => setBoardOwnedBy(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Last Adjustment
                <input type="text" value={boardLastAdjustment} onChange={e => setBoardLastAdjustment(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Model
                <input type="text" value={boardModel} onChange={e => setBoardModel(e.target.value)} />
              </label>
            </div>
            <div className="blank-form-item text-input"></div>
            <div className="form-item text-input">
              <label>
                Released To
                <input type="text" value={boardReleasedTo} onChange={e => setBoardReleasedTo(e.target.value)} />
              </label>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div> {/* Binding Info */}
          <div>Bindings</div>
          <br />
          <div className="column-1">
            <div className="form-item text-input">
              <label>
                ID Number
                <input type="text" value={bindingIDNumber} onChange={e => setBindingIDNumber(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Shop Name
                <input type="text" value={bindingShopName} onChange={e => setBindingShopName(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Make
                <input type="text" value={bindingMake} onChange={e => setBindingMake(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Size
                <input type="text" value={bindingSize} onChange={e => setBindingSize(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Removed By
                <input type="tel" value={bindingRemovedBy} onChange={e => setBindingRemovedBy(e.target.value)} />
              </label>
            </div>

          </div>
          <div className="column-2">
            <div className="form-item text-input">
              <label>
                Owned By
                <input type="text" value={bindingOwnedBy} onChange={e => setBindingOwnedBy(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Last Adjustment
                <input type="text" value={bindingLastAdjustment} onChange={e => setBindingLastAdjustment(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Model
                <input type="text" value={bindingModel} onChange={e => setBindingModel(e.target.value)} />
              </label>
            </div>
            <div className="blank-form-item text-input"></div>
            <div className="form-item text-input">
              <label>
                Released To
                <input type="text" value={bindingReleasedTo} onChange={e => setBindingReleasedTo(e.target.value)} />
              </label>
            </div>
          </div>
        </div>

        <br /><br /><br />
        <div> {/* Boot Info */}
          <div>Boots</div>
          <br />
          <div className="column-1">
            <div className="form-item text-input">
              <label>
                ID Number
                <input type="text" value={bootIDNumber} onChange={e => setBootIDNumber(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Shop Name
                <input type="text" value={bootShopName} onChange={e => setBootShopName(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Make
                <input type="text" value={bootMake} onChange={e => setBootMake(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Size
                <input type="text" value={bootSize} onChange={e => setBootSize(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Removed By
                <input type="tel" value={bootRemovedBy} onChange={e => setBootRemovedBy(e.target.value)} />
              </label>
            </div>

          </div>
          <div className="column-2">
            <div className="form-item text-input">
              <label>
                Owned By
                <input type="text" value={bootOwnedBy} onChange={e => setBootOwnedBy(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Last Adjustment
                <input type="text" value={bootLastAdjustment} onChange={e => setBootLastAdjustment(e.target.value)} />
              </label>
            </div>
            <div className="form-item text-input">
              <label>
                Model
                <input type="text" value={bootModel} onChange={e => setBootModel(e.target.value)} />
              </label>
            </div>
            <div className="blank-form-item text-input"></div>
            <div className="form-item text-input">
              <label>
                Released To
                <input type="text" value={bootReleasedTo} onChange={e => setBootReleasedTo(e.target.value)} />
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BoardForm;