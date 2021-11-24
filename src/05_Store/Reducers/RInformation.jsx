import * as Types from "../Actions/actionTypes";
const INIT_STATE = {};

const informationReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.GET_INFO_REQUEST: {
			return { ...state };
		}
		case Types.GET_INFO_SUCCESS: {
			return { ...state, information: action.payload };
		}
		case Types.GET_INFO_ERROR: {
			return { ...state, error: action.payload };
		}
		default:
			return state;
	}
};

export default informationReducer;
