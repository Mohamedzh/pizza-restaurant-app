import { combineReducers } from "redux";
import menuReducer from "./menu.reducer";
import cartReducer from "./cart.reducer";
import orderReducer from "./order.reducer"
import newOrderReducer from './newOrder.reducer'

const reducers = combineReducers({menuReducer, cartReducer, orderReducer, newOrderReducer});

export default reducers