import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import BearLogo from '../../images/Bear_Logo.png'

const NavigationBar = () => {

  // const toggleHandler = (e) => {
  //   console.log("Toggle")
  // }
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link
          className="nav-link"
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
      </div>
      <div className="nav-right"></div>
    </div>



    // <div className="nav-bar">
    //   <div className="nav_left">
    //     <div className="nav_link"> {/* Logo with link to home */}
    //       <a href="/">
    //         <img className="name_logo" src={BearLogo} alt="Logo" />
    //       </a>
    //     </div>
    //     <a id="nav_toggle" href="#" onClick={toggleHandler}>&#9776;</a>
    //     <div className="nav_link">
    //     </div>
    //     <div className="nav_link">
    //       <a id="home_Link" href="/dispatch">Dispatch</a>
    //     </div>
    //     <div className="nav_link">
    //       <a id="projects_Link" href="/patrol">Patrol</a>
    //     </div>
    //     <div className="nav_link">
    //       <a href="/liftOps">Lift Ops</a>
    //     </div>
    //     <div className="nav_link">
    //       <a href="/parkStaff">Park Staff</a>
    //     </div>
    //   </div>
    //   <div className="nav_right contact">
    //     <a href="">
    //       <img className="contact_logo" src="" alt="Logo" />
    //     </a>
    //     <a href="">
    //       <img className="contact_logo" src="" alt="Logo" />
    //     </a>
    //     <a href="">
    //       <img className="contact_logo" src="" alt="" />
    //     </a>
    //   </div>
    // </div>
  )
}

export default NavigationBar