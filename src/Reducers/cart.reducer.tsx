import { Action } from "history";

const menuReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDTOCART":
            let item = action.payload
            if (state.includes(item)) {
                let x = state.find(selectedItem => selectedItem.id === item.id)
                let y = state.indexOf(x)
                x.orderQty += 1
                state.splice(y, 1, x)
                return state;
            } else
                item.orderQty = 1
            return state = [...state, item];

        case "REMOVEFROMCART":
            let item2 = action.payload
            let x = state.find(selectedItem => selectedItem.id === item2.id)
            let y = state.indexOf(x)
            state.splice(y, 1)
            return state;

        case "SETCART":
            return action.payload
        case "CLEAR_CART":
            return [];
        case "INCREMENT":
            let addedItem = action.payload
            let incremented = state.find(selectedItem => selectedItem.id === addedItem.id)
            let addedItemIndex = state.indexOf(incremented)
            incremented.orderQty += 1
            state.splice(addedItemIndex, 1, incremented)
            return state;
        case "DECREMENT":
            let subItem = action.payload
            let decremented = state.find(selectedItem => selectedItem.id === subItem.id)
            let subItemIndex = state.indexOf(decremented)
            if (decremented.orderQty === 1){return state}
            else{
            decremented.orderQty -= 1
            state.splice(subItemIndex, 1, decremented)}
            return state;
        default:
            return state;
    }
}

export default menuReducer