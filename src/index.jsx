import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/styles.css";

const target = document.getElementById("root");
ReactDOM.render(<App />, target);
if (module.hot) {
	module.hot.accept();
}
