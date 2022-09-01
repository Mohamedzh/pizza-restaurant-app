import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuType } from '../types';


const initialState: MenuType[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<MenuType>) {
              return  state = [...state, { ...action.payload, orderQty: 1 }]
        },
        incrementCart(state, action: PayloadAction<MenuType>) {
            return state.map((item: MenuType) => {
                if (item.id === action.payload.id) {
                    return { ...item, orderQty: item.orderQty! + 1 }
                }
                else { return item }
            })
        },
        decrementCart(state, action: PayloadAction<MenuType>) {
            return state.map(item => {
                if (item.id === action.payload.id && (item.orderQty!) > 1) {
                    return { ...item, orderQty: item.orderQty! - 1 }
                }
                else { return item }
            })
        },
        clearCart(state) {
            return [];
        },
        setCart(state, action: PayloadAction<MenuType[]>) {
            return action.payload
        }
    }
})

export const { clearCart, setCart, decrementCart, incrementCart, addToCart } = cartSlice.actions
export default cartSlice.reducer