import { SHOW_LOADER, HIDE_LOADER } from "./actionTypes";

const showLoader = (title) => {
	return {
		type: SHOW_LOADER,
		payload: {
			status: true,
			title: title,
		},
	};
};

const hideLoader = () => {
	return { type: HIDE_LOADER };
};

export { showLoader, hideLoader };
