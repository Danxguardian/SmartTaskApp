import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "./05_Store/index";
import "./assets/css/allStyles.css";

const target = ReactDOM.createRoot(document.getElementById("root"));

target.render(
	<Provider store={store}>
		<App />
	</Provider>
);
if (module.hot) {
	module.hot.accept();
}
