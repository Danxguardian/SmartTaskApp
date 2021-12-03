import React, { useState } from "react";

const PTestPage = ({ summitData, openModal, openLoader }) => {
	const [responseService, setResponseService] = useState("");

	return (
		<>
			<div className="row">
				<div className="col-12 col-lg-4 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg "
						onClick={() => {
							openModal();
						}}
					>
						Abrir Modal
					</button>
				</div>
				<div className="col-12 col-lg-4 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg"
						onClick={() => {
							openLoader();
						}}
					>
						Abrir Loader
					</button>
				</div>
				<div className="col-12 col-lg-4 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg"
						onClick={() => {
							console.log("Hacer Ping");
							summitData();
						}}
					>
						Hacer Ping
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-12">Response: {responseService}</div>
			</div>
		</>
	);
};

export default PTestPage;
