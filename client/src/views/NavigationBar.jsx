import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavigationBar.css'
import BearLogo from '../images/Bear_Logo.png'

const NavigationBar = () => {

  // const toggleHandler = (e) => {
  //   console.log("Toggle")
  // }
  return (
    <div className="navbar">
      <Link
        className="nav-link logo"
        to="/">
        <img id="homeLogo" src={BearLogo} alt="Logo" />
      </Link>
      <Link
        className="nav-link"
        to="/dispatch">
        Dispatch
      </Link>
      <Link
        className="nav-link"
        to="/patrol">
        Patrol
      </Link>
      <Link
        className="nav-link"
        to="/parkStaff">
        Park Staff
      </Link>
      <Link
        className="nav-link"
        to="/liftOps">
        Lift Ops
      </Link>
      <Link
        className="nav-link"
        to="/management">
        Management
      </Link>
      <div className="toggle">
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </div>
    </div>
  )
}

export default NavigationBar