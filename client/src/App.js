import "./App.css";

import NavigationBar from "./views/Architecture/NavigationBar";
import MainContent from "./views//Architecture/MainContent";
import MainFooter from "./views/Architecture/MainFooter";

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
