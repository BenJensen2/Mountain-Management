import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/ContextMenu.css'

const ContextMenu = ({ parentRef, mapRef }) => {
  const [isVisible, setVisibility] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const parent = parentRef.current
    console.log("Parent", parent)
    console.log(parent.getBoundingClientRect())

    if (!parent) {
      return;
    }

    const showMenu = (event) => {
      event.preventDefault();

      setVisibility(true);
      setX(event.offsetX);
      setY(event.offsetY);
    };

    const closeMenu = () => {
      setVisibility(false);
    };

    parent.addEventListener('contextmenu', showMenu);
    window.addEventListener('click', closeMenu);

    return function cleanup() {
      parent.removeEventListener('contextmenu', showMenu);
      window.removeEventListener('click', closeMenu);
    };
  })

  const style = {
    top: y,
    left: x
  };

  const createIncident = (e) =>{

    let newIncident = {
      Guest_Name: "Bobby",
      Responder_Name: "Jim",
      Incident_Info: "It happened on Bear Peak",
      Personnel: "Stew, Donny, and some park dude",
      Gear: "Skis and bindings, No Helmet!!",
      Features: "The BIG one"
    }

    axios.post("http://localhost:8000/api/incident/new",newIncident)
    .then(res => {
      console.log("Incident Created", res.data)
    }).catch(err =>{
      console.log("We've got errors",err)
    })
  }

  return isVisible ? (
    <div className="context-menu" style={style}>
      <ul>
        <li className="context-item">
          <Link
            onClick={createIncident}
            to="/incident">
            Incident
          </Link>
        </li>
        <li className="context-item">
          <Link
            to="/incident">
            Feature
          </Link>
        </li>
        <li className="context-item">
          <Link
            to="/incident">
            Investigation
          </Link>
        </li>
        <li className="context-item">
          <Link
            to="/incident">
            Safety
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
};

export default ContextMenu;