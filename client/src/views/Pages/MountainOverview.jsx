import React from 'react';
import ResortMap from '../Components/MountainOverview/ResortMap'
import OperatingTimes from '../Components/MountainOverview/OperatingTimes'
import '../../styles/MountainOverview.css'

const MountainOverview = (props) => {
  return (
    <div className="mountain-overview">
      
      <div className="operating-times">
        <OperatingTimes
          title="Open Times"
        />
      </div>

      <ResortMap />

      <div className="operating-times">
        <OperatingTimes
          title="Close Times"
        />
      </div>
    </div>
  )
}

export default MountainOverview;