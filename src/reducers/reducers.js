import themeReducer from "./theme.reducer";
import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";
import {cartReducer} from "./cart.reducer";

const reducers = combineReducers({
    theme: themeReducer,
    auth: authReducer,
    cart: cartReducer
});

export default reducers;