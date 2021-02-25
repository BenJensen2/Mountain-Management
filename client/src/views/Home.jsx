import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import Bear from '../images/Bear.jpg';
import '../styles/Home.css'
import ContextMenu from '../Components/ContextMenu'

const Home = (props) => {

  const containerRef = useRef(null);
  const mapRef = useRef(null)

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

  return (
    <div>
      <header>
        <h1 className="home-header" >
          HomePage
      </h1>
        <ul>
          <li>
            <Link
              to="/allMembers">
              All Members
            </Link>
          </li>
          <li>
            <Link
              to="/map2D">
              Map 2D
            </Link>
          </li>
          <li>
            <Link
              to="/map3D">
              Map 3D
            </Link>
          </li>
          <li>
            <Link
              to="/incident"
              onClick={createIncident}>
              Incident
            </Link>
          </li>
        </ul>
      </header>
      <div className="trail-map" ref={containerRef}>
        <ContextMenu parentRef={containerRef}
          mapRef={mapRef} />
        {/* <div className="overlay">
          Mapping coordinates to trail map would not be porportional.... maybe it would
          Another way would be to just setup boundry boxes of coordinates and if a wreck is within lat or lon then highlight on the trail map
          <div id="bearPeak" onClick={bearHandler}>
            <div className="status"></div>
          </div>
        </div> */}
        <img id='trailMap' src={Bear} alt="" ref={mapRef} />
      </div>
    </div>
  )
}

export default Home;