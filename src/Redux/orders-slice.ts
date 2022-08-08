import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OrderType } from '../types';


const initialState: OrderType[] = []

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrders2(state, action: PayloadAction<OrderType[]>) {
            return action.payload
        }
    }
})

export const{ addOrders2} = ordersSlice.actions;
export default ordersSlice.reducer