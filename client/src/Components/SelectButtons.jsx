import React from 'react';
import './SelectButtons.css'

const SelectButtons = ({ buttons,setValue, shadowColor }) => {
  
  const buttonHandler = (e) => {
    console.log(e.target.style, e.target.boxShadow)
    if (e.target.style.boxShadow == shadowColor + " 2px 2px 8px") {
      console.log("Has box shadow")
      e.target.style.boxShadow = ""
    } else {
      console.log("Doesn't have shadow")
      e.target.style.boxShadow = shadowColor + " 2px 2px 8px"
    }
    setValue(e.target.value)
  }

  return (
    <div className="select-buttons">
      {
        buttons.map((button,i) =>
        <button key={i} type="button" className="selector-button unselected" onClick={buttonHandler} value={button[1]}>{button[0]}</button>
        )
      }
    </div>
  )
}

export default SelectButtons;