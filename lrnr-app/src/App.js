import "./App.css";
import PrimarySearchAppBar from "./components/AppBar/AppBar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import LeftPanelThree from "./components/LeftPanel/LeftPanelThree";
import LeftPanelTwo from "./components/LeftPanel/LeftPanelTwo";
import tree from "./data/leftPanelData";
import tree2 from "./data/leftPanelTwo";
import tree3 from "./data/leftPanelThree";
import tree4 from "./data/leftPanelFour";
import tree5 from "./data/leftPanelFive";
import LeftPanelFour from "./components/LeftPanel/LeftPanelFour";
import LeftPanelFive from "./components/LeftPanel/LeftPanelFive";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className="flex h-screen m-1">
        <div className="border-4 p-10 w-1/3.5">
          <LeftPanel tree={tree} />
          <LeftPanelTwo tree2={tree2} />
          <LeftPanelThree tree3={tree3} />
          <LeftPanelFour tree4={tree4} />
          <LeftPanelFive tree5={tree5} />
        </div>
        <div className="border-4 p-10 w-full"></div>
      </div>
    </div>
  );
}

export default App;
