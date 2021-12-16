import React from 'react';
import './SelectButtons.css'

const SingleSelectButtons = ({ buttons, value, setValue, shadowColor }) => {
  const clearButtons = (e) => {
    let childNodes = e.target.parentElement.children;
    for (let i = 0; i < childNodes.length; i++) {
      childNodes[i].style = ""
    }
  }
  const shadowButton = (e) => {
    let shadowStyle = " 2px 2px 8px";
    e.target.style.boxShadow === shadowColor + shadowStyle
      ? e.target.style.boxShadow = ""
      : e.target.style.boxShadow = shadowColor + shadowStyle
  }

  const buttonHandler = (e) => {
    clearButtons(e)
    if (value !== e.target.value){
      setValue(e.target.value)
      shadowButton(e)
    } else {
      setValue("")
    }
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

export default SingleSelectButtons;