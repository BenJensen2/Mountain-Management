import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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

  return isVisible ? (
    <div className="context-menu" style={style}>
      <ul>
        <li className="context-item">
          <Link
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