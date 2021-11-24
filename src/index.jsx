import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "./05_Store/index";
import "./assets/css/allStyles.css";

const target = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	target
);
if (module.hot) {
	module.hot.accept();
}
