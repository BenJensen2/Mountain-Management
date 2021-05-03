import React from 'react';
import LeftDataPanel from './Components/MountainOverviewComponents/LeftDataPanel'
import CenterMap from './Components/MountainOverviewComponents/CenterMap'
import RightDataPanel from './Components/MountainOverviewComponents/RightDataPanel'
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