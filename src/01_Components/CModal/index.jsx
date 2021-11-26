import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import * as actionsModal from "../../05_Store/Actions/AModal";

import "./index.css";
//type 1=info 2=accept
export const CModal = ({ type, title, message, btnAccept, btnCancel }) => {
	console.log(type);
	const dispatch = useDispatch();
	return (
		<div
			className="modal showModal"
			id="staticBackdrop"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabIndex="-1"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="staticBackdropLabel">
							{title}
						</h5>
					</div>
					<div className="modal-body">{message}</div>
					<div className="modal-footer">
						{type != 1 && (
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								onClick={() => {
									dispatch(actionsModal.hideModal());
								}}
							>
								{btnCancel}
							</button>
						)}
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								console.log("onclick");
								dispatch(actionsModal.acceptModal());
							}}
						>
							{btnAccept}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
