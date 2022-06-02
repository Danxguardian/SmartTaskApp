/* FILE TO MERGE ALL REDUCER ON ONE ROOT */
import { combineReducers } from "redux";
import loaderReducer from "./RLoader";
import modalReducer from "./RModal";
import taskReducer from "./RTask";
export const rootReducer = combineReducers({
	modal: modalReducer,
	loader: loaderReducer,
	task: taskReducer,
});
