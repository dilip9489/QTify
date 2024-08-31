// var React = require("react");
// var ReactDOM = require("react-dom");
// import createRoot from "react-dom/client";
// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<h1>Heloo world!</h1>, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
// let myName = "Dilip";
/* <h1>JS Expression {myName}</h1>
<p>{Math.floor(Math.random() * 100)}</p> */

// const title = {
//   color: "orange",
//   backgroundColor: "black",
//   textTransform: "capitalise",
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
