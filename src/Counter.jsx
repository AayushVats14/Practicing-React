import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Plus one</button>
      {counter == 0 ? (
        <h4>Come on, click the button</h4>
      ) : counter == 1 ? (
        <h4>Good boy</h4>
      ) : counter == 2 ? (
        <h4>Huh, who said to touch it again?!</h4>
      ) : counter == 3 ? (
        <h4>Aree, don't u touch it again</h4>
      ) : counter == 4 ? (
        <h2>I'M SERIOUS</h2>
      ) : (
        <h1>:)</h1>
      )}
    </div>
  );
};

export default Counter;
