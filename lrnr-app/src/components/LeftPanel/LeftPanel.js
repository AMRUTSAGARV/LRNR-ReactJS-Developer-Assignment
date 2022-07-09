import React, { useState } from "react";

function LeftPanel({ tree }) {
  const [expand, setExpand] = useState(false);
  if (tree.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {tree.name}
          <br />
        </span>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {tree.items.map((exp) => {
            return <LeftPanel key={exp.key} tree={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {tree.name}
        <br />
      </span>
    );
  }
}

export default LeftPanel;
