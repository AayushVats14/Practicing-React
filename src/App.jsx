import React from "react";
import ToDo from "./ToDo.jsx";
import User from "./User.jsx";
import Change from "./hooks.jsx";
import Counter from "./Counter.jsx";
import Display from "./Display.jsx";
import User2 from "./User2.jsx";

function App() {
  return (
    <>
      <ToDo />
      <Display />
      <User2 name="Hailee" age={28} email="hailee@test.com" />
      <Change />
      <Counter />
      <h2>Props in React:</h2>
    </>
  );
}

export default App;
