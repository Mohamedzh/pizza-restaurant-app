import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/cart-slice';
import menuReducer from '../Redux/menu-slice';
import newOrderReducer from '../Redux/newOrder-slice';
import ordersReducer from '../Redux/orders-slice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        newOrder: newOrderReducer,
        orders: ordersReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;