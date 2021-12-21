import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import MountainOverview from "./Pages/MountainOverview";
import MountainItems from './Pages/MountainItems';

// import AllRuns from "./Components/MountainItems/AllRuns";
// import CurrentMap from "./Components/MountainItems/CurrentMap";
// import Dispatch from "./Components/MountainItems/Dispatch";
// import Feature from "./Components/MountainItems/Feature";
import Incident from "./Components/MountainOverview/ContextMenu/Incident";
// import LiftOps from "./Components/MountainItems/LiftOps";
// import Map2D from "./Components/MountainItems/Map2D";
// import Map3D from "./Components/MountainItems/Map3D";
// import Patrol from "./Components/MountainItems/Patrol";
// import ParkStaff from "./Components/MountainItems/ParkStaff";
// import Run from "./Components/MountainItems/Run";

const MainContent = (props) => {
  // Set data to use: Dummy Data(0), Database(1)
  const dataSelection = 0;

  return (
    <div className="main-content">
      <Switch>
        {/* Will select the first matching route */}
        <Route path="/Features">
          <MountainItems item="feature" />
        </Route>

        <Route path="/Lifts">
          <MountainItems item="lift" />
        </Route>

        <Route path="/Members">
          <MountainItems item="member" />
        </Route>

        <Route path="/Runs">
          <MountainItems item="run" />
        </Route>

        {/*
        <Route path="/currentMap">
          <CurrentMap />
        </Route>
        <Route path="/dispatch">
          <Dispatch />
        </Route>
        <Route path="/feature">
          <Feature />
        </Route>
  */}
        <Route path="/incident">
          <Incident />
        </Route>
        {/*
        <Route path="/liftOps">
          <LiftOps />
        </Route>
        <Route path="/map3D">
          <Map3D />
        </Route>
        <Route path="/map2D">
          <Map2D />
        </Route>
        <Route path="/parkStaff">
          <ParkStaff />
        </Route>
        <Route path="/patrol">
          <Patrol />
        </Route>
        <Route path="/run">
          <Run />
        </Route> */}
        <Route path="/">
          <MountainOverview />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContent;