import React, { useState, useEffect } from "react";
import Input from "./reusable/Input";
import Select from "./reusable/Select";
import * as userApi from "./api/userApi";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const newUser = {
  id: null,
  name: "",
  role: ""
};

function ManageUser(props) {
  //Handle state via useState Hook
  /* const userState = useState(newUser);
  const users = userState[0];
  const setUser = userState[1]; */

  //can be simplified as
  const [user, setUser] = useState(newUser); //newUSer is the default object
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //user is same as a state prop in class like this.state.user
  //setUser is same as setSate in class like this.setState

  useEffect(() => {
    let mounted = true;
    //If it is edit, then we do this
    if (props.match.params.userId) {
      const _user = props.users.find(
        x => x.id === parseInt(props.match.params.userId, 10)
      );
      //this is to prevent error which occurs when u navigate to another page when api called is in progress
      if (mounted) {
        setUser(_user);
        setIsLoading(false);
      }
    } else setIsLoading(false); //If adding, nothing to load

    //called when componenet is unmounting.
    return () => (mounted = false);
  }, [props.match.params.userId, props.users]); //this will get called every time it renders and only when the second param value changes

  function handleSave(savedUser) {
    props.history.push("/users"); // will redirect to a relative url based on host name. Another option to Redirect
    toast.success(savedUser.name + " saved! 👍");
  }
  function isValid() {
    const _errors = {};
    if (!user.name) _errors.name = "Name is required";
    if (!user.role) _errors.role = "Role is required";
    setErrors(_errors);
    // if errors object still doesn't have any properties, then there are no errors
    return Object.keys(_errors).length === 0;
  }
  function saveUser(event) {
    event.preventDefault(); //prevents posting back to server
    if (!isValid()) return;
    setIsFormSubmitted(true);
    if (user.id) {
      userApi.editUser(user).then(savedUser => {
        const newUsers = props.users.map(u =>
          u.id === savedUser.id ? savedUser : u
        );
        props.setUsers(newUsers);
        handleSave(savedUser);
      });
    } else {
      userApi.addUser(user).then(savedUser => {
        const newUsers = [...props.users, savedUser];
        props.setUsers(newUsers);
        handleSave(savedUser);
      });
    }
  }

  function handleChange(event) {
    const userCopy = { ...user };
    //userCopy.name = event.target.value;
    //using computed property syntax to set a property using a variable.
    userCopy[event.target.name] = event.target.value;
    setUser(userCopy);
  }

  if (isLoading) return "...Loading 🔃";
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
          error={errors.name}
        ></Input>
        <Select
          id="role"
          type="text"
          name="role" // this is the property we wanna set onChange. can name it anything
          value={user.role}
          onChange={handleChange}
          label="Role"
          error={errors.role}
          options={[
            { label: "", value: "" },
            { label: "User", value: "user" },
            { label: "Admin", value: "admin" }
          ]}
        ></Select>

        <input
          type="submit"
          disabled={isFormSubmitted ? "disabled" : null}
          value={isFormSubmitted ? "Saving..." : "Save User"}
        ></input>
      </form>
    </>
  );
}

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired
};

export default ManageUser;
