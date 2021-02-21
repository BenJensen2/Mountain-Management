import React from 'react';
import './SelectButtons.css'

const MultipleSelectButtons = ({ buttons, buttonValues, setButtonValues, shadowColor }) => {

  const updateValue = (e) => {
    let newValues = [...buttonValues];
    if (newValues.includes(e.target.value)) {
      let filteredValues = newValues.filter(newValue => newValue !== e.target.value)
      setButtonValues(filteredValues)
    } else {
      console.log("New Values: ", [...buttonValues, e.target.value])
      setButtonValues([...buttonValues, e.target.value])
    }
  }

  const shadowToggle = (e) => {
    let shadowStyle = " 2px 2px 8px";
    e.target.style.boxShadow === shadowColor + shadowStyle
      ? e.target.style.boxShadow = ""
      : e.target.style.boxShadow = shadowColor + shadowStyle
  }

  const buttonHandler = (e) => {
    updateValue(e)
    shadowToggle(e)
  }

  return (
    <div className="select-buttons">
      {
        buttons.map((button, i) =>
          <button key={i} type="button" className="selector-button" onClick={buttonHandler} value={button[1]}>{button[0]}</button>
        )
      }
    </div>
  )
}

export default MultipleSelectButtons;