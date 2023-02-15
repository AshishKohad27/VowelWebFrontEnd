import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../Redux/product/reducer";
import { cartReducer } from "./cart/reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);
