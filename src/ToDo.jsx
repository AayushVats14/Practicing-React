import React from "react";

function ToDo() {
  function onCall() {
    alert("Function was called");
  }

  return (
    <div>
      <h1>Kai's To-Do List app</h1>
      <img
        src="https://en.wikipedia.org/wiki/Deadpool_%28film%29"
        alt="deadpool"
        className="photo"
      />

      <ul>
        <li>Complete this stream</li>
        <li>Clean the room</li>
        <li>Save the world</li>
      </ul>
    </div>
  );
}

export default ToDo;
