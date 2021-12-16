import React from 'react';
import CenterMap from './Components/MountainData/CenterMap'
import OperatingTimes from './Components/MountainData/OperatingTimes'
import '../styles/MountainOverview.css'

const MountainOverview = (props) => {
  return (
    <div className="mountain-overview">
      
      <div className="operating-times">
        <OperatingTimes
          title="Open Times"
        />
      </div>

      <CenterMap />

      <div className="operating-times">
        <OperatingTimes
          title="Close Times"
        />
      </div>
    </div>
  )
}

export default MountainOverview;