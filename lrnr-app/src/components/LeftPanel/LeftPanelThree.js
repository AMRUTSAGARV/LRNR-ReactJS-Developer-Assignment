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
        {/* <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}> */}
        {/* {tree3.items.map((exp) => {
            return <LeftPanelThree key={exp.key} tree3={exp} />;
          })} */}
        {/* </div> */}
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
