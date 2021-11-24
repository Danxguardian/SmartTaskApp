import * as Types from "../Actions/actionTypes";
import MESSAGES from "../../06_Utils/i18n";
const INIT_STATE = {
	status: false,
	default: {
		title: MESSAGES["LOADER_DEFAULT"],
	},
};

const loaderReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.SHOW_LOADER: {
			return {
				...state,
				status: action.payload.status,
				title: action.payload.title
					? action.payload.title
					: state.default.title,
			};
		}

		case Types.HIDE_LOADER: {
			return {
				...state,
				status: false,
			};
		}

		default:
			return state;
	}
};

export default loaderReducer;
