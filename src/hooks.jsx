import React from "react";
import { useState } from "react";

function Change() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Mango");
  };

  return (
    <div>
      <h1>Using State to change UI</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit</button>
    </div>
  );
}

export default Change;
