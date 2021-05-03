import React, { useRef } from 'react';
import MountainOverviewContextMenu from '../MountainOverviewContextMenu'
import '../MountainOverviewComponents/CenterMap.css'
import Bear from '../../../images/Bear.jpg';

const CenterMap = () => {

  const containerRef = useRef(null);
  const mapRef = useRef(null)

  return (
    <div className="mountain-map">
      <div className="trail-map" ref={containerRef}>
        <MountainOverviewContextMenu parentRef={containerRef}
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

export default CenterMap;