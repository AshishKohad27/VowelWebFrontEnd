// Don't make any changes to this file.
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

const initialState = {
  data: [],
  message: "",
  singleData: {},
  loading: false,
  error: false,
  errorMessage: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        message: payload.message,
        loading: false,
        error: false,
      };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: payload.data,
        errorMessage: payload.message
      };


    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleData: payload.data[0],
        message: payload.message,
        loading: false,
        error: false,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: payload.data,
        errorMessage: payload.message
      };


    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload.data,
        message: payload.message,
        loading: false,
        error: false,
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: payload.data,
        errorMessage: payload.message
      };


    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload.data,
        message: payload.message,
        loading: false,
        error: false,
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: payload.data,
        errorMessage: payload.message
      };


    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload.data,
        message: payload.message,
        loading: false,
        error: false,
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: payload.data,
        errorMessage: payload.message
      };




    default:
      return state;
  }
};
