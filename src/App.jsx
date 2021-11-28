import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLoader } from "./01_Components/CLoader/index";
import { CModal } from "./01_Components/CModal";
import { encrypt } from "./06_Utils/encrypt";
import { descrypt } from "./06_Utils/decrypt";
import CONFIG from "./04_Constans/constans";

import * as modalActions from "./05_Store/Actions/AModal";

/* import logo192 from "../public/src/logo192.png";
import logo512 from "../public/src/logo512.png"; */

/* implementar route guard */

console.log("env", process.env);
console.log("config", CONFIG);

export const App = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loader);
	const modal = useSelector((state) => state.modal);
	useEffect(() => {
		/* dispatch(showLoader("Nice")); */
		dispatch(
			modalActions.showModal(1, null, descrypt(encrypt("hola mundo")))
		);
	}, []);

	return (
		<>
			<div className="container col">
				<div className="row justify-content-md-center">
					<div className="testBorder col-12 col-lg-2">SideBar </div>
					<div className="testBorder col-12 col-lg-10">Content</div>
				</div>
			</div>

			{modal.status && (
				<CModal
					type={modal.type}
					title={modal.title}
					message={modal.message}
					btnAccept={modal.accept}
					btnCancel={modal.cancel}
				/>
			)}
			{loading.status && <CLoader title={loading.title} />}
			{/* implementar dialogue errors */}
		</>
	);
};
