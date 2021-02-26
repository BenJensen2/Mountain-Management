import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Bear from '../images/Bear.jpg';
import '../styles/Home.css'
import ContextMenu from '../Components/ContextMenu'

const Home = (props) => {

  const containerRef = useRef(null);
  const mapRef = useRef(null)

  return (
    <div>
      <header>
        <h1 className="home-header" >
          HomePage
      </h1>
        <Link to="/allMembers">| All Members </Link>
        <Link to="/allFeatures">| All Features </Link>
        <Link to="/allRuns">| All Runs </Link>
        <Link to="/map2D">| Map 2D </Link>
        <Link to="/map3D">| Map 3D </Link>
        <Link to="/incident">| Incident </Link>
        <Link to="/feature">| Feature </Link>
        <Link to="/run">| Run </Link>
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