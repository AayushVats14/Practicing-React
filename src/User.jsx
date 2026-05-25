import React from "react";

function User() {
  const userObj = {
    name: "Kai Boyer",
    email: "kai@test.com",
    age: 20,
  };

  return (
    <div>
      <h1>{userObj.name}</h1>
      <h2>{userObj.email}</h2>
      <h3>{userObj.age}</h3>
    </div>
  );
}

export default User;
