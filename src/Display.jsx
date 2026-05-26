import React, { useState } from "react";
import User from "./User.jsx";

function Display() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      {display ? <User /> : null}
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Display;
