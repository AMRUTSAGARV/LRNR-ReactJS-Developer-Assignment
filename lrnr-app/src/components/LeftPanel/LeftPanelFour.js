import React, { useState } from "react";

function LeftPanelFour({ tree4 }) {
  const [expand, setExpand] = useState(false);
  if (tree4.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {tree4.name}
          <br />
        </span>
      </div>
    );
  } else {
    return (
      <span>
        {tree4.name}
        <br />
      </span>
    );
  }
}

export default LeftPanelFour;
