import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuType } from '../types';


const initialState: MenuType[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart2(state, action: PayloadAction<MenuType>) {
            if (state.find(item=>item.id === action.payload.id)){
                state.map((item: MenuType) => {
                    if (item.id === action.payload.id) {
                        return { ...item, orderQty: item.orderQty! + 1 }
                    }
                    else { return item }
                })
            }else{
                return [...state, {...action.payload, orderQty:1}]
            }
            
        },

        incrementCart2(state, action: PayloadAction<MenuType>) {
            return state.map((item: MenuType) => {
                if (item.id === action.payload.id) {
                    return { ...item, orderQty: item.orderQty! + 1 }
                }
                else { return item }
            })
        },
        decrementCart2(state, action: PayloadAction<MenuType>) {
            return state.map(item => {
                if (item.id === action.payload.id && (item.orderQty!) > 1) {
                    return { ...item, orderQty: item.orderQty! - 1 }
                }
                else { return item }
            })
        },
        clearCart2(state) {
            return [];
        },
        setCart2(state, action: PayloadAction<MenuType[]>) {
            return action.payload
        }
    }
})

export const { clearCart2, setCart2, decrementCart2, incrementCart2, addToCart2 } = cartSlice.actions
export default cartSlice.reducer

// action.payload = {...action.payload, orderQty:1}
            // console.log(action.payload)
            // // return state.map((item: MenuType) => {
            // //     if (item.id === action.payload.id) {
            // //         return { ...item, orderQty: item.orderQty! + 1 }
            // //     }else {return {...item, orderQty:1}}
            // // })
            // // let item: MenuType = action.payload
            // if (state.includes(action.payload)) {
            //     // let x: any = state.find((selectedItem: any) => selectedItem.id === item.id)
            //     // let y = state.indexOf(x)
            //     // x.orderQty! += 1
            //     // state.splice(y, 1, x)
            //     // if (item.id === action.payload.id) {

            // //         return state.map(item => ({ ...item, orderQty: item.orderQty! + 1 }))
            //     // }
            //     // state;
            // } else
            // // item.orderQty = 1
            // {
            //     state.push(action.payload);
            //     return state
            // }
            // state = [...state, item];