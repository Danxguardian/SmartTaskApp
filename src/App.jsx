import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLoader } from "./01_Components/CLoader/index";
import { CModal } from "./01_Components/CModal";
import CONFIG from "./04_Constans/constans";

import CTaskApp from "./03_Controllers/CTaskApp";
import PTaskApp from "./02_Pages/PTaskApp";
import { GlobalStyles } from "@mui/material";

export const App = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loader);
	const modal = useSelector((state) => state.modal);

	return (
		<>
			<div className="container">
				<CTaskApp RenderComponent={PTaskApp} />
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
