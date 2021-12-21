import React from 'react';
import ResortMap from '../Components/MountainOverview/ResortMap'
import OperatingTimes from '../Components/MountainOverview/OperatingTimes'
import '../../styles/MountainOverview.css'

const MountainOverview = (props) => {
  return (
    <div className="mountain-overview">
      <OperatingTimes times="open"/>
      <ResortMap />
      <OperatingTimes times="close"/>
    </div>
  )
}

export default MountainOverview;