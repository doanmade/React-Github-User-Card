import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

// Install npm install --save styled-components
// Install -- npm install react-router-dom
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
