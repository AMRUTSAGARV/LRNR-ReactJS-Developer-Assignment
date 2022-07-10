import React, { useState } from "react";

function LeftPanelTwo({ tree2 }) {
  const [expand, setExpand] = useState(false);
  if (tree2.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {tree2.name}
          <br />
        </span>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {tree2.items.map((exp) => {
            return <LeftPanelTwo key={exp.key} tree2={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {tree2.name}
        <br />
      </span>
    );
  }
}

export default LeftPanelTwo;
