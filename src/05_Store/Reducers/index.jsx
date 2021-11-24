/* FILE TO MERGE ALL REDUCER ON ONE ROOT */
import { combineReducers } from "redux";
import informationReducer from "./RInformation";
import loaderReducer from "./RLoader";
export const rootReducer = combineReducers({
	loader: loaderReducer,
	information: informationReducer,
});
