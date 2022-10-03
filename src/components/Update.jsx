import React from "react";
import { useState } from "react";

function Update() {
  const [update, setUpdate] = useState(true);
  return (
    <>
      <div className="container">
        <div className="parent">
          <h3>Parent</h3>
          <h5>
            {update === true
              ? "I need to be updated from my child"
              : "Im updated"}
          </h5>
        </div>
        <div className="child">
          <h3>Child</h3>
          <button onClick={() => setUpdate(!update)}>
            Change parent value
          </button>
        </div>
      </div>
    </>
  );
}
export default Update;
