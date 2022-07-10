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
import Wysiwyg from "./components/Wysiwyg.js/Wysiwyg";
import BasicTabs from "./components/SwitchTabs/SwitchTabs";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <BasicTabs />
    </div>
  );
}

export default App;
