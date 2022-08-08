import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import orderReducer from "./order.reducer"
import newOrderReducer from './newOrder.reducer'

const reducers = combineReducers({ cartReducer, orderReducer, newOrderReducer});

export default reducers