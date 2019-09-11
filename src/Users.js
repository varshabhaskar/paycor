import React from "react";
import { Link } from "react-router-dom";
import * as userApi from "./api/userApi";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    //this.deleteUser = this.deleteUser.bind(this);
  }

  //Magical lifecycle method that's called after component is mounted on the page.
  //there are lots of others. Only valid for class components. Function components use Hooks.
  componentDidMount() {
    userApi.getUsers().then(users => this.setState({ users: users }));
  }

  deleteUser = userId => {
    userApi.deleteUser(userId).then(() => {
      //Runs after the delete was successful
      const users = this.state.users.filter(user => user.id !== userId);
      this.setState({ users: users });
    });
  };

  renderUser = user => {
    return (
      <li key={user.id}>
        <button onClick={() => this.deleteUser(user.id)}>Delete</button>{" "}
        {user.name}
      </li>
    );
  };
  //the JSX we returned here will be rendered.
  render() {
    return (
      <>
        <h1>Users</h1>
        <Link to="/manage-user">Add User</Link>
        <ul>{this.state.users.map(this.renderUser)}</ul>
      </>
    );
  }
}

export default Users;
