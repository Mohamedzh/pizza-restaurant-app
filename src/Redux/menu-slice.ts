import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuType } from '../types';


const initialState: MenuType[] = []

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu2(state, action: PayloadAction<MenuType[]>) {
            return state = action.payload
        }
    }
})

export const { setMenu2 } = menuSlice.actions;
export default menuSlice.reducer