import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./types";

export const getAllProducts = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    const res = await axios.get(`http://localhost:7878/data?page=${payload}`);
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_ERROR,
      payload: error.response.data
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });

    const res = await axios.get(`http://localhost:7878/data/${id}`);

    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PRODUCT_ERROR,
      payload: error.response.data
    });
  }
};

//admin only

export const addProduct = (payload) => async (dispatch) => {
  console.log("payload:---", payload.payload)
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    const res = await axios.post("http://localhost:7878/data/add", payload);
    console.log('res:', res)
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error.response.data.desc)
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: error.response.data
    });
  }
};

export const updateProduct = (payload) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    let res = await axios.patch(`http://localhost:7878/data`, payload);
    console.log('res:', res)
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_ERROR,
      payload: error.response.data
    });
  }
};

export const deleteProduct = (payload) => async (dispatch) => {
  console.log('payload Delete Id:', payload._id)
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    let res = await axios.delete(`http://localhost:7878/data/${payload._id}`);
    console.log('res:', res)
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_ERROR,
      payload: error.response.data
    });
  }
};
