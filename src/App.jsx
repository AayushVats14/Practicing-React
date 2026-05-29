import React from "react";
import ToDo from "./ToDo.jsx";
import User from "./User.jsx";
import Change from "./hooks.jsx";
import Counter from "./Counter.jsx";
import Display from "./Display.jsx";
import User2 from "./User2.jsx";
import { useState } from "react";
import Student from "./Student.jsx";
import Default from "./Default.jsx";
import Wrapper from "./Wrapper.jsx";

function App() {
  const [student, setStudent] = useState();

  return (
    <>
      <ToDo />
      <Display />
      <User2 name="Hailee" age={28} email="hailee@test.com" />
      <Change />
      <Counter />
      <h2>Props in React:</h2>
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Patrick")}>Update Student</button>
      <Default name="Peter" />
      <Default />
      <Wrapper color="Orange">
        <h1>Hello World</h1>
      </Wrapper>

      <Wrapper>
        <h2>Hello Kai</h2>
      </Wrapper>

      <Wrapper>
        <h3>Hello admin</h3>
        <h4 style={{ color: "Red" }}>Login to continue</h4>
      </Wrapper>
    </>
  );
}

export default App;
