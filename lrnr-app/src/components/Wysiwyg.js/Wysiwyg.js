import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import "./Wysiwyg.css";
import EditingOption from "../EditingOption/EditingOption";
import FormattingOp from "../FormattingOptions/FormattingOp";

const Wysiwyg = () => {
  return (
    <div className="ml-40 w-4/5 themain">
      <div className="text-xs">
        collection.1/collection.1.1/collection.1.1.1
        <span className="ml-20">Add item member</span>
      </div>
      <div className="header">WYSIWYG Editor</div>
      <EditingOption />
      {/* <h1 className="tname1 py-3 text-xl">Topic Name</h1> */}
      <p className="py-3 para1 text-base">
        <strong>Modern</strong> conception of data science as an independent
        discipline is sometimes attributed to William S. Cleveland. In a 2001
        paper, he advocated an expansion of statistics beyond theory into
        technical areas; because this would significantly change the field, it
        warranted a new name.Data science became more widely used in the next
        few years: in 2002, the Committee on Data for Science and Technology
        launched Data Science Journal. In 2003, Columbia University launched The
        Journal of Data Science.In 2014, the American Statistical Association's
        Section on Statistical Learning and Data Mining changed its name to the
        Section on Statistical Learning and Data Science.
      </p>
      <FormattingOp />
      <h1 className="tname2 py-3 text-xl">Topic Name</h1>
      <p className="py-3 para2 text-base">
        Many statisticians, including Nate Silver, have argued that data science
        is not a new field, but rather another name for statistics.Others argue
        that data science is distinct from statistics because it focuses on
        problems and techniques unique to digital data. Vasant Dhar writes that
        statistics emphasizes quantitative data and description. In contrast,
        data science deals with quantitative and qualitative data.
      </p>
      <AddCircleOutlineOutlinedIcon />
    </div>
  );
};

export default Wysiwyg;
