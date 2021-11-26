/* FILE TO MERGE ALL REDUCER ON ONE ROOT */
import { combineReducers } from "redux";
import informationReducer from "./RInformation";
import loaderReducer from "./RLoader";
import modalReducer from "./RModal";
export const rootReducer = combineReducers({
	modal: modalReducer,
	loader: loaderReducer,
	information: informationReducer,
});
