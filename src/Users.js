import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "@paycor/button";
import { Delete } from "@paycor/icon";
import PropTypes from "prop-types";

function Users({ deleteUser, users }) {
  const [redirect, setRedirect] = useState(false);

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

Users.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
