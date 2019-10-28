import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import * as userApi from "./api/userApi";
import Button from "@paycor/button";
import { Delete } from "@paycor/icon";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    userApi.getUsers().then(users => setUsers(users));
  }, []); //this will get called every time it renders and only when the second param value changes

  function deleteUser(userId) {
    userApi.deleteUser(userId).then(() => {
      const _users = users.filter(user => user.id !== userId);
      setUsers(_users);
    });
  }

  function renderUser(user) {
    return (
      <li key={user.id}>
        <Button
          type={Button.Types.DELETE}
          icon={Delete}
          onClick={() => deleteUser(user.id)}
        >
          Delete
        </Button>{" "}
        <Link id={"user-" + user.id} to={`/manage-user/${user.id}`}>
          {user.name}
        </Link>
      </li>
    );
  }

  //the JSX we returned here will be rendered.
  return (
    <>
      <h1>Users</h1>
      {redirect && <Redirect to="/manage-user"></Redirect>}
      <Button onClick={() => setRedirect(true)}>Add User</Button>
      <ul>{users.map(renderUser)}</ul>
    </>
  );
}

export default Users;
