import {
    GET_INFO_REQUEST,
    GET_INFO_SUCCESS,
    GET_INFO_ERROR,
} from "./actionTypes";

const getInfoRequest = (payload) => {
    return { type: GET_INFO_REQUEST, payload: payload };
};

const getInfoSuccess = (payload) => {
    return { type: GET_INFO_SUCCESS, payload: payload };
};
const getInfoError = ({ error }) => {
    return { type: GET_INFO_ERROR, payload: error };
};

export { getInfoRequest, getInfoSuccess, getInfoError };

export default { getInfoRequest, getInfoSuccess, getInfoError };
