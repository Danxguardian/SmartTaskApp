/* FILE TO MERGE ALL SAGAS ON ONE ROOT */
import { fork } from "redux-saga/effects";
import informationSagas from "./SInformation";

export default function* rootSaga() {
	yield fork(informationSagas);
}
