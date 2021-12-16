import React from 'react';
import { Route, Switch } from "react-router-dom";
import MountainOverview from "../MountainOverview";

// import AllFeatures from "./views/AllFeatures";
// import AllLifts from "./views/AllLifts";
// import AllMembers from "./views/AllMembers";
// import AllRuns from "./views/AllRuns";
// import CurrentMap from "./views/CurrentMap";
// import Dispatch from "./views/Dispatch";
// import Feature from "./views/Feature";
import Incident from "./Incident";
// import LiftOps from "./views/LiftOps";
// import Map2D from "./views/Map2D";
// import Map3D from "./views/Map3D";
// import Patrol from "./views/Patrol";
// import ParkStaff from "./views/ParkStaff";
// import Run from "./views/Run";

const MainContent = (props) => {
  return (
    <div className="main-content">
      <Switch>
        {/* Will select the first matching route */}
        {/* <Route path="/allFeatures">
          <AllFeatures />
        </Route>
        <Route path="/allLifts">
          <AllLifts />
        </Route>
        <Route path="/allMembers">
          <AllMembers />
        </Route>
        <Route path="/allRuns">
          <AllRuns />
        </Route>
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