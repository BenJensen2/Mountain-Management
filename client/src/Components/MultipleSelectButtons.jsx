import React from 'react';
import './SelectButtons.css'

const MultipleSelectButtons = ({ buttons, values, setValues, shadowColor }) => {

  const shadowToggle = (e) => {
    let shadowStyle = " 2px 2px 8px";
    e.target.style.boxShadow === shadowColor + shadowStyle
      ? e.target.style.boxShadow = ""
      : e.target.style.boxShadow = shadowColor + shadowStyle
  }

  const buttonHandler = (e) => {
    if (values.includes(e.target.value)) {
      setValues(values.filter(value => value !== e.target.value))
    } else {
      values.push(e.target.value)
    }
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