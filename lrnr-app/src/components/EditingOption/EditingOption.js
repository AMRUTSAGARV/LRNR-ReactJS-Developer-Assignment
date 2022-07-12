import React from "react";
import "./EditingOption.css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LinkIcon from "@mui/icons-material/Link";
import ChatIcon from "@mui/icons-material/Chat";
const EditingOption = () => {
  return (
    <div className="py-2.5 mr-30">
      <div className="speech-bubble">
        <div className="icon1">
          <FormatBoldIcon />
        </div>
        <div className="icon2 ml-10">
          <FormatItalicIcon />
        </div>
        <div className="icon8 ml-20">
          <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
        </div>
        <div className="icon9 ml-20">
          <LinkIcon />
        </div>
        <div className="icon12 ">
          <ChatIcon />
        </div>
      </div>
    </div>
  );
};

export default EditingOption;
