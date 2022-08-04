import { OrdersActionType } from "../types";

const orderReducer = (state = [], action:OrdersActionType) => {
    switch (action.type) {
        case "ADDORDER":
           return  action.payload;
        default:
            return state;
    }
}

export default orderReducer