import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; //alias
import "react-toastify/dist/ReactToastify.css";

//we are wrapping the App with Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
