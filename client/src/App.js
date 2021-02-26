import "./App.css";
import AllMembers from "./views/AllMembers";
import AllFeatures from "./views/AllFeatures"
import AllRuns from "./views/AllRuns"
import Home from "./views/Home";
import Map2D from "./views/Map2D";
import Map3D from "./views/Map3D";
import Incident from "./views/Incident";
import Feature from "./views/Feature";
import Run from "./views/Run";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Will select the first matching route */}
        <Route path="/allFeatures">
          <AllFeatures />
        </Route>
        <Route path="/allMembers">
          <AllMembers />
        </Route>
        <Route path="/allRuns">
          <AllRuns />
        </Route>
        <Route path="/feature">
          <Feature />
        </Route>
        <Route path="/incident">
          <Incident />
        </Route>
        <Route path="/map3D">
          <Map3D />
        </Route>
        <Route path="/map2D">
          <Map2D />
        </Route>
        <Route path="/run">
          <Run />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
