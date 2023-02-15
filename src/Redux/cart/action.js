import axios from "axios";

import {
    ADD_TO_CART_ERROR,
    ADD_TO_CART_LOADING,
    ADD_TO_CART_SUCCESS,
    DELETE_TO_CART_ERROR,
    DELETE_TO_CART_LOADING,
    DELETE_TO_CART_SUCCESS,
    GET_TO_CART_ERROR,
    GET_TO_CART_LOADING,
    GET_TO_CART_SUCCESS,
    GET_USER_TO_CART_ERROR,
    GET_USER_TO_CART_LOADING,
    GET_USER_TO_CART_SUCCESS,
    HISTORY_CART_ITEM,
} from "./type";

export const getCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TO_CART_LOADING });

        let res = await axios.get(`https://odd-plum-monkey-cuff.cyclic.app/cart`);
        // console.log('res:', res)

        dispatch({ type: GET_TO_CART_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_TO_CART_ERROR, payload: e });
    }
};

export const addItemInCart = (payload) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_LOADING });

        let res = await axios.post(`https://odd-plum-monkey-cuff.cyclic.app/cart`, payload);
        console.log("res:", res.data);

        dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: ADD_TO_CART_ERROR, payload: e.response.data });
    }
};

export const getCartUser = (payload) => async (dispatch) => {
    console.log("payload from cart:", payload);
    try {
        dispatch({ type: GET_USER_TO_CART_LOADING });

        let res = await axios.post(`https://odd-plum-monkey-cuff.cyclic.app/cart/usercart`, payload);
        console.log("res:", res.data);

        dispatch({ type: GET_USER_TO_CART_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_USER_TO_CART_ERROR, payload: e.response.data });
    }
};

export const placeOrder = (payload) => async (dispatch) => {
    console.log("payload from cart:", payload);
    try {
        dispatch({ type: GET_USER_TO_CART_LOADING });

        let res = await axios.post(`https://odd-plum-monkey-cuff.cyclic.app/cart/placeOrder`, payload);
        console.log("res:", res.data);

        dispatch({ type: GET_USER_TO_CART_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_USER_TO_CART_ERROR, payload: e.response.data });
    }
};

export const deleteCart = (payload) => async (dispatch) => {
    console.log("payload from cart:", payload);
    try {
        dispatch({ type: DELETE_TO_CART_LOADING });

        let res = await axios.delete(`https://odd-plum-monkey-cuff.cyclic.app/cart/${payload}`);
        // console.log("res:", res.data);

        dispatch({ type: DELETE_TO_CART_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: DELETE_TO_CART_ERROR, payload: e.response.data });
    }
};

export const updateQuantity = ({ id, quantity }) => async (dispatch) => {
    console.log("payload from cart:", id);
    try {
        dispatch({ type: DELETE_TO_CART_LOADING });

        let res = await axios.patch(`https://odd-plum-monkey-cuff.cyclic.app/cart/${id}`, { quantity });
        // console.log("res:", res.data);

        dispatch({ type: DELETE_TO_CART_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: DELETE_TO_CART_ERROR, payload: e.response.data });
    }
};


export const getHistory = () => async (dispatch) => {
    // console.log("payload from cart:", id);
    try {

        let res = await axios.get(`https://odd-plum-monkey-cuff.cyclic.app/cart/history`);
        console.log("res history:", res.data);

        dispatch({ type: HISTORY_CART_ITEM, payload: res.data });
    } catch (e) {
        console.log(e);

    }
};
