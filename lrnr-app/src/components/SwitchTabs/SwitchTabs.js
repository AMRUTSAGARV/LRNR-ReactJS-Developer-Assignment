import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LeftPanel from "../LeftPanel/LeftPanel";
import LeftPanelTwo from "../LeftPanel/LeftPanelTwo";
import LeftPanelThree from "../LeftPanel/LeftPanelThree";
import LeftPanelFive from "../LeftPanel/LeftPanelFive";
import LeftPanelFour from "../LeftPanel/LeftPanelFour";
import Wysiwyg from "../Wysiwyg.js/Wysiwyg";
import tree from "../../data/leftPanelData";
import tree2 from "../../data/leftPanelTwo";
import tree3 from "../../data/leftPanelThree";
import tree4 from "../../data/leftPanelFour";
import tree5 from "../../data/leftPanelFive";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Board" {...a11yProps(1)} />
          <Tab label="Graph" {...a11yProps(2)} />
          <Tab label="Recent" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex h-screen">
          <div className="border-2 p-10 w-1/3.5">
            <LeftPanel tree={tree} />
            <LeftPanelTwo tree2={tree2} />
            <LeftPanelThree tree3={tree3} />
            <LeftPanelFour tree4={tree4} />
            <LeftPanelFive tree5={tree5} />
          </div>
          <div className="border-2 p-10 w-full">
            <Wysiwyg />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Board
      </TabPanel>
      <TabPanel value={value} index={2}>
        Graph
      </TabPanel>
      <TabPanel value={value} index={3}>
        Recent
      </TabPanel>
    </Box>
  );
}
