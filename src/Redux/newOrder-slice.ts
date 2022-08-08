import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OrderType } from '../types';


const initialState: OrderType = {}

const newOrderSlice = createSlice({
    name: 'newOrder',
    initialState,
    reducers: {
        addNewOrder2(state, action: PayloadAction<OrderType>) {
            return action.payload
        }
    }
})

export const{ addNewOrder2} = newOrderSlice.actions;
export default newOrderSlice.reducer