import React, { useRef } from 'react';
import ContextMenu from './ContextMenu/ContextMenu'
import Bear from '../../../images/Bear.jpg';

const MountainMap = () => {

  const containerRef = useRef(null);
  const mapRef = useRef(null)

  return (
    <div className="resort-map" ref={containerRef}>
      <ContextMenu parentRef={containerRef}
        mapRef={mapRef} />
      {/* <div className="overlay">
          Mapping coordinates to trail map would not be porportional.... maybe it would
          Another way would be to just setup boundry boxes of coordinates and if a wreck is within lat or lon then highlight on the trail map
          <div id="bearPeak" onClick={bearHandler}>
            <div className="status"></div>
          </div>
        </div> */}
      <img id='resortTrailMap' src={Bear} alt="" ref={mapRef} />
    </div>
  )
}

export default MountainMap