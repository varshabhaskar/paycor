import React, { useState } from "react";
import Input from "./reusable/Input";

const newUser = {
  id: null,
  name: "",
  hairColor: ""
};

function ManageUser() {
  //Handle state via useState Hook
  /* const userState = useState(newUser);
  const users = userState[0];
  const setUser = userState[1]; */

  //can be simplified as
  const [user, setUser] = useState(newUser);

  //user is same as a state prop in class like this.state.user
  //setUser is same as setSate in class like this.setState

  function saveUser(event) {
    event.preventDefault(); //prevents posting back to server
  }

  function handleChange(event) {
    const userCopy = { ...user };
    //userCopy.name = event.target.value;
    //using computed property syntax to set a property using a variable.
    userCopy[event.target.name] = event.target.value;
    setUser(userCopy);
  }

  return (
    <>
      <h1>Manage User</h1>
      <form onSubmit={saveUser}>
        <Input
          id="user-name"
          type="text"
          name="name" // this is the property we wanna set onChange. can name it anything
          value={user.name}
          onChange={handleChange}
          label="Name"
        ></Input>

        <Input
          id="hair-color"
          type="text"
          name="hairColor"
          value={user.hairColor}
          onChange={handleChange}
          label="Hair color"
        ></Input>

        <input type="submit" value="Save User"></input>
      </form>
    </>
  );
}

export default ManageUser;
