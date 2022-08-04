import { OrdersActionType } from "../types";

const newOrderReducer = (state = {}, action:OrdersActionType) => {
    switch (action.type) {
        case "NEWORDER":
           return  action.payload;
        default:
            return state;
    }
}

export default newOrderReducer