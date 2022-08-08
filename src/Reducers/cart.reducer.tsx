import { MenuType } from "../types"

const menuReducer = (state:MenuType[] = [], action:any) => {
    switch (action.type) {
        case "ADDTOCART":
            let item : MenuType = action.payload
            if (state.includes(item)) {
                let x: any = state.find((selectedItem:any) => selectedItem.id === item.id)
                let y = state.indexOf(x)
                x.orderQty! += 1
                state.splice(y, 1, x)
                return state;
            } else
                item.orderQty = 1
            return state = [...state, item];

        case "REMOVEFROMCART":
            let item2 = action.payload
            let x: any = state.find(selectedItem => selectedItem.id === item2.id)
            let y = state.indexOf(x)
            state.splice(y, 1)
            return state;

        case "SETCART":
            return action.payload
        case "CLEAR_CART":
            return [];

        case "INCREMENT":
            // return [...state, action.payload]
            return state.map((item:MenuType)=> {
                if (item.id === action.payload.id) {
                    return { ...item, orderQty: item.orderQty! + 1 }
                }
                else { return item }
            })
        // let addedItem = action.payload
        // let incremented = state.find(selectedItem => selectedItem.id === addedItem.id)
        // let addedItemIndex = state.indexOf(incremented)
        // incremented.orderQty += 1
        // state.splice(addedItemIndex, 1, incremented)
        // return state;

        case "DECREMENT":
            return state.map(item => {
                if (item.id === action.payload.id && (item.orderQty!) > 1) {
                    return { ...item, orderQty: item.orderQty! - 1 }
                }
                else { return item }
            })
        // let subItem = action.payload
        // let decremented = state.find(selectedItem => selectedItem.id === subItem.id)
        // let subItemIndex = state.indexOf(decremented)
        // if (decremented.orderQty === 1) { return state }
        // else {
        //     decremented.orderQty -= 1
        //     state.splice(subItemIndex, 1, decremented)
        // }
        // return state;
        default:
            return state;
    }
}

export default menuReducer