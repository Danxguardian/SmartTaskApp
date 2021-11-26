import * as Types from "../Actions/actionTypes";
import MESSAGES from "../../06_Utils/i18n";
const INIT_STATE = {
	status: false,
	default: {
		type: 1,
		title: MESSAGES["MODAL_TITLE_DEFAULT"],
		message: MESSAGES["MODAL_MESSAGE_DEFAULT"],
		accept: MESSAGES["MODAL_ACCEPT_DEFAULT"],
		cancel: MESSAGES["MODAL_CANCEL_DEFAULT"],
	},
};

const modalReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.SHOW_MODAL: {
			return {
				...state,
				type: action.payload.type
					? action.payload.type
					: state.default.type,
				status: action.payload.status,
				title: action.payload.title
					? action.payload.title
					: state.default.title,
				message: action.payload.message
					? action.payload.message
					: state.default.message,
				accept: action.payload.accept
					? action.payload.accept
					: state.default.accept,
				cancel: action.payload.cancel
					? action.payload.cancel
					: state.default.cancel,
			};
		}

		case Types.HIDE_MODAL: {
			return {
				...state,
				status: false,
			};
		}

		case Types.ACCEPT_MODAL: {
			return {
				...state,
				status: false,
				answer: true,
			};
		}

		default:
			return state;
	}
};

export default modalReducer;
