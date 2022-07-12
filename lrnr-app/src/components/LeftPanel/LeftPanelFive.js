import React, { useState } from "react";

function LeftPanelFive({ tree5 }) {
  const [expand, setExpand] = useState(false);
  if (tree5.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {tree5.name}
          <br />
        </span>
      </div>
    );
  } else {
    return (
      <span>
        {tree5.name}
        <br />
      </span>
    );
  }
}

export default LeftPanelFive;
