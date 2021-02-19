import React, { useEffect, useState } from 'react';
import '../styles/ContextMenu.css'

const ContextMenu = ({ parentRef, mapRef }) => {
  const [isVisible, setVisibility] = useState(false);
  const [parentx,setParentX] = useState(0);
  const [parenty,setParentY] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const parent = parentRef.current
    console.log("Parent",parent)
    console.log(parent.getBoundingClientRect())
    setParentX(parent.getBoundingClientRect().x)
    setParentY(parent.getBoundingClientRect().y)

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
        <li className = "context-item">Incident</li>
        <li className = "context-item">Feature</li>
        <li className = "context-item">Investigation</li>
        <li className = "context-item">Safety</li>
      </ul>
    </div>
  ) : null;
};

export default ContextMenu;