import React from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import { Link, Route } from "react-router-dom"; // similar to href

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Route path="/" exact component={Home}></Route>
      <Route path="/users" component={Users}></Route>
      <Route path="/manage-user" component={ManageUser}></Route>
    </>
  );
}

export default App;
