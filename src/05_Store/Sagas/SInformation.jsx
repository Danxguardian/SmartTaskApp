import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getService } from "../../07_Services/getServices";
import * as actionTypes from "../Actions/actionTypes";
import { getInfoError, getInfoSuccess } from "../Actions/AInformation";

export function* getInfoRequest() {
	try {
		const infoData = yield call(
			getService("http://demo9587930.mockable.io/", "", "sso/sso-info")
		);
		yield put(getInfoSuccess(infoData));
	} catch (error) {
		/* IF ONE SHOW A ERROR THIS IS THE PLACES */
		yield put(getInfoError(error));
	}
}

export default function* informationSagas() {
	yield takeLatest(actionTypes.GET_INFO_REQUEST, getInfoRequest);
}
