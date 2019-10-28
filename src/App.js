import React, { useEffect, useState } from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import { Link, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as userApi from "./api/userApi";
import Loading from "./reusable/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi.getUsers().then(users => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []); //this will get called every time it renders and only when the second param value changes

  function deleteUser(userId) {
    userApi.deleteUser(userId).then(() => {
      const _users = users.filter(user => user.id !== userId);
      setUsers(_users);
    });
  }

  if (isLoading) return <Loading />;
  return (
    <>
      <ToastContainer />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        {/* passing props */}
        <Route
          path="/users"
          render={reactRouterProps => (
            <Users
              users={users}
              deleteUser={deleteUser}
              {...reactRouterProps}
            />
          )}
        ></Route>
        <Route
          path="/manage-user/:userId?"
          render={props => (
            <ManageUser users={users} setUsers={setUsers} {...props} />
          )}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
