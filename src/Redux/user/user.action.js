import axios from "axios";
import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_LOADING,
    SIGNUP_SUCCESS,
    VERIFY_SUCCESS,
} from "./user.type";

export const postSign = (payload) => async (dispatch) => {
    // console.log('payload SignIn:', payload);
    dispatch({ type: SIGNUP_LOADING });
    try {
        let res = await axios.post(`http://localhost:7878/user/signup`, payload);
        // console.log('res:', res.data);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: SIGNUP_ERROR, payload: e.response.data });
    }
};

export const postLogin = (payload) => async (dispatch) => {
    console.log('payload:', payload);
    dispatch({ type: LOGIN_LOADING });
    try {
        let res = await axios.post(`http://localhost:7878/user/login`, payload);
        // console.log('res:', res);
        console.log('res:', res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (e) {
        console.log('e:', e)
        // dispatch({ type: LOGIN_ERROR, payload: e.response.data });
    }
};

export const postVerify = (payload) => async (dispatch) => {
    // console.log('payload Verify:', payload)
    try {
        let res = await axios.post(`http://localhost:7878/user/verify`, payload);
        dispatch({ type: VERIFY_SUCCESS, payload: res.data });
    } catch (e) {
        console.log("e:", e.message);
    }
};


