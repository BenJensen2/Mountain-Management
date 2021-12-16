import "./App.css";

import NavigationBar from "./views/NavigationBar";
import MainContent from "./views/MainContent";
import MainFooter from "./views/MainFooter";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainContent />
      <MainFooter />
    </div>
  );
}

export default App;
