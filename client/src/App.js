import "./App.css";

import NavigationBar from "./views/NavigationBar";
import QuickLinks from "./views/Components/QuickLinks";
import MainContent from "./views/MainContent";
import MainFooter from "./views/MainFooter";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainContent />
      <QuickLinks/>
    </div>
  );
}

export default App;
