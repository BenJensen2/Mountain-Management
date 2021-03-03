import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Bear from '../images/Bear.jpg';
import '../styles/Home.css'
import ContextMenu from '../Components/ContextMenu'

const Home = (props) => {

  const containerRef = useRef(null);
  const mapRef = useRef(null)

  console.log(process.env.REACT_APP_HELLO)

  return (
    <div className="home-page">
      <div className="home-left">
        <h4>Open Times</h4>
        <ul>
          <li>East Side</li>
        </ul>
      </div>
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
      <div className="home-right">
        <h4>Close Times</h4>
        <ul>
          East Side
          <li>
            <ul>
              <li>Chair 8</li>
            </ul>
          </li>
          Learning
          <li>
            <ul>
              <li>Chair 6</li>
              <li>Chair 7</li>
              <li>MC 4</li>
              <li>MC 3</li>
              <li>MC 2</li>
              <li>MC 1</li>
            </ul>
          </li>
          Silver
          <li>
            <ul>
              <li>Chair 6</li>
            </ul>
          </li>
          <br/>
          <h5>Central</h5>
          <li>
            <ul>
              <li>Chair 2</li>
              <li>Chair 5</li>
              <li>Chair 9</li>
            </ul>
          </li>
          West Side
          <li>
            <ul>
              <li>Chair 3</li>
            </ul>
          </li>
        </ul>
      </div>
      <footer>
        <div>
          <Link to="/allLifts">| All Lifts </Link>
          <Link to="/allMembers">| All Members </Link>
          <Link to="/allFeatures">| All Features </Link>
          <Link to="/allRuns">| All Runs </Link>
        </div>
        <div>
          <Link to="/map2D">| Map 2D </Link>
          <Link to="/map3D">| Map 3D </Link>
          <Link to="/currentMap">| Current Map </Link>
          <Link to="/dispatch">| Dispatch </Link>
          <Link to="/incident">| Incident </Link>
          <Link to="/feature">| Feature </Link>
          <Link to="/run">| Run </Link>
        </div>
      </footer>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.REACT_APP_HELLO}</div>
    </div>
  )
}

export default Home;