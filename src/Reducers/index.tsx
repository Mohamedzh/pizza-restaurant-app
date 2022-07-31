import { combineReducers } from "redux";
import menuReducer from "./menu.reducer";
import cartReducer from "./cart.reducer";
import orderReducer from "./order.reducer"

const reducers = combineReducers({menuReducer, cartReducer, orderReducer});

export default reducers