import React from 'react';
import LeftDataPanel from './Components/MountainOverview/LeftDataPanel'
import CenterMap from './Components/MountainOverview/CenterMap'
import RightDataPanel from './Components/MountainOverview/RightDataPanel'
import './MountainOverview.css'

const MountainOverview = (props) => {
  return (
    <div className="mountain-overview">
      <LeftDataPanel />
      <CenterMap />
      <RightDataPanel />
    </div>
  )
}

export default MountainOverview;