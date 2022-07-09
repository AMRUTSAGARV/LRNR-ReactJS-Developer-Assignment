import "./App.css";
import PrimarySearchAppBar from "./components/AppBar/AppBar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import tree from "./data/leftPanelData";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className="flex h-screen m-1">
        <div className="border-4 p-10 w-1/3.5">
          <LeftPanel tree={tree} />
        </div>
        <div className="border-4 p-10 w-full"></div>
      </div>
    </div>
  );
}

export default App;
