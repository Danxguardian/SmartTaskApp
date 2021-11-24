import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
export const CLoader = ({ title }) => {
	return (
		<div className="loader row">
			<div className="loader-container ">
				<div className="loader-spinner">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="loader-title">{title}</div>
			</div>
		</div>
	);
};
