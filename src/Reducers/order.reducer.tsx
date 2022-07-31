import { Action } from "history";

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADDORDER":
            let x= action.payload
           return state= {...state, ...x };
        default:
            return state;
    }
}

export default orderReducer