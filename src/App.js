import React from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import { Link, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
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
        <Route path="/users" component={Users}></Route>
        <Route path="/manage-user/:userId" component={ManageUser}></Route>
        <Route path="/manage-user" component={ManageUser}></Route>
      </Switch>
    </>
  );
}

export default App;
