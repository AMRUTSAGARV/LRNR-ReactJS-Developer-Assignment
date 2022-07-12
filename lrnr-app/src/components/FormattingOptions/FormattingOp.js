import React from "react";
import "./FormatingOp.css";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import LinkIcon from "@mui/icons-material/Link";
const FormattingOp = () => {
  return (
    <div className="py-2.5">
      <div className="speech-bubble2">
        <div className="icon4">
          <LocalParkingIcon />
        </div>
        <div className="icon5 ml-10">
          <LinkIcon />
        </div>
        <div className="icon6 ml-20">
          <ChatSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default FormattingOp;
