import React, { useState } from "react";

function LeftPanelThree({ tree3 }) {
  const [expand, setExpand] = useState(false);
  if (tree3.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {tree3.name}
          <br />
        </span>
      </div>
    );
  } else {
    return (
      <span>
        {tree3.name}
        <br />
      </span>
    );
  }
}

export default LeftPanelThree;
