import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLoader } from "./01_Components/CLoader/index";
/* import logo192 from "../public/src/logo192.png";
import logo512 from "../public/src/logo512.png"; */

import { getInfoRequest } from "./05_Store/Actions/AInformation";
import { showLoader } from "./05_Store/Actions/ALoader";
/* implementar route guard */
export const App = () => {
	const dispatch = useDispatch();
	/* dispatch(getInfoRequest({})); */
	/* implementar action for dialogue errors */

	const loading = useSelector((state) => state.loader);

	useEffect(() => {
		dispatch(showLoader());
	}, []);

	return (
		<>
			<div className="container col">
				<div className="row justify-content-md-center">
					<div className="testBorder col-12 col-lg-2">SideBar </div>
					<div className="testBorder col-12 col-lg-10">Content</div>
				</div>
			</div>

			{loading.status && <CLoader title={loading.title} />}
			{/* implementar dialogue errors */}
		</>
	);
};
