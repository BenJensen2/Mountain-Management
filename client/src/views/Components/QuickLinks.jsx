import React from 'react';
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="quick-links">
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
    </div>
  )
}

export default QuickLinks;