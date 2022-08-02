const menuReducer = (state = [], action) => {
    switch (action.type) {
        case "SETMENU":
            return action.payload;
        default:
            return state;
    }
}

export default menuReducer