import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalActions from "../05_Store/Actions/AModal";
import * as loaderActions from "../05_Store/Actions/ALoader";
const CTestPage = ({ RenderComponent }) => {
	const stateForWorks = useSelector((state) => state);

	const dispatch = useDispatch();

	const openModal = (values) => {
		console.log("openModal");
		dispatch(modalActions.showModal(1, null, "Soy un Modal 😎😎"));
	};

	const openLoader = (values) => {
		console.log("openLoader");
		dispatch(loaderActions.showLoader());
		setTimeout(function () {
			dispatch(loaderActions.hideLoader());
		}, 5000);
	};

	const summitData = (values) => {
		const payload = {};
		console.log("summitData");
		/* dispatch(actionsIdentification.getIdentificationRequest(payload)); */
	};

	const propsToComponent = {
		summitData: summitData,
		openModal: openModal,
		openLoader: openLoader,
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CTestPage;
