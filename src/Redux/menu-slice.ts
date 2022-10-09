import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuType } from '../types';


const initialState: MenuType[] = []

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu(state, action: PayloadAction<MenuType[]>) {
            return state = action.payload
        }
    }
})

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer