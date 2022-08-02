import { Action } from "history";

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDORDER":
           return  action.payload;
        default:
            return state;
    }
}

export default orderReducer