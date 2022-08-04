import { MenuActionType, MenuType } from "../types";

const menuReducer = (state = [], action:MenuActionType) => {
    switch (action.type) {
        case "SETMENU":
            return action.payload;
        default:
            return state;
    }
}

export default menuReducer