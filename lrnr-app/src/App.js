import "./App.css";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import tree from "./data/leftPanelData";

function App() {
  return (
    <div className="App">
      <LeftPanel tree={tree} />
    </div>
  );
}

export default App;
