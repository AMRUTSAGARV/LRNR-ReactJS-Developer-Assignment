import React, { useState } from "react";

function LeftPanel({ tree }) {
  const [expand, setExpand] = useState(true);
  if (tree.isFolder) {
    return (
      <div>
        <button onClick={() => setExpand(!expand)}>
          {tree.name}
          <br />
        </button>
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
