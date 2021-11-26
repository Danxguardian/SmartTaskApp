import { SHOW_MODAL, HIDE_MODAL, ACCEPT_MODAL } from "./actionTypes";

const showModal = (type, title, message, accept, cancel) => {
	return {
		type: SHOW_MODAL,
		payload: {
			status: true,
			type: type,
			title: title,
			message: message,
			accept: accept,
			cancel: cancel,
		},
	};
};

const hideModal = () => {
	return { type: HIDE_MODAL };
};

const acceptModal = () => {
	return { type: ACCEPT_MODAL };
};

export { showModal, hideModal, acceptModal };
