const { ADD_TO_CART_LOADING, ADD_TO_CART_ERROR, ADD_TO_CART_SUCCESS, GET_TO_CART_LOADING, GET_TO_CART_SUCCESS, GET_TO_CART_ERROR, GET_USER_TO_CART_LOADING, GET_USER_TO_CART_SUCCESS, GET_USER_TO_CART_ERROR, DELETE_TO_CART_LOADING, DELETE_TO_CART_SUCCESS, DELETE_TO_CART_ERROR, HISTORY_CART_ITEM } = require("./type")

const initialState = {
    cart: [],
    loading: false,
    error: false,
    allCart: [],
    userQuantity: 0,
    total: 0,
    history: [],
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case HISTORY_CART_ITEM: {
            // console.log("history comming:", payload.data)
            return {
                ...state,
                history: payload.data,
            }
        }

        case ADD_TO_CART_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case ADD_TO_CART_SUCCESS: {
            return {
                ...state,
                cart: payload.data,
                loading: false,
                error: false
            }
        }
        case ADD_TO_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        case GET_TO_CART_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_TO_CART_SUCCESS: {
            return {
                ...state,
                allCart: payload.data,
                loading: false,
                error: false
            }
        }
        case GET_TO_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        case GET_USER_TO_CART_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_USER_TO_CART_SUCCESS: {
            return {
                ...state,
                cart: payload.data,
                userQuantity: payload.data.length,
                total: payload.total,
                loading: false,
                error: false
            }
        }
        case GET_USER_TO_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }


        case DELETE_TO_CART_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case DELETE_TO_CART_SUCCESS: {
            return {
                ...state,
                cart: payload.data,
                userQuantity: payload.data.length,
                loading: false,
                error: false
            }
        }
        case DELETE_TO_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

      

        default: return state
    }

}