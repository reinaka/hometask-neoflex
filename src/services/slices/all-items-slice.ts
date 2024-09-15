import { createSlice } from '@reduxjs/toolkit';
import { items } from '../data';
import { TItem } from '../types';

const initialState = items;

export const allItemsSlice = createSlice({
    name: 'allItems',
    initialState,
    reducers: {
        switchedFavourite(state, action) {
            let newArr = state.map((elem : TItem) => {
                if (elem.id === action.payload) {
                    let newItem = {
                        ...elem,
                        favorite : elem.favorite ? false : true
                    }
                    return newItem;
                } else {
                    return elem;
                }
            });
            return newArr;
        }
    }
});

export const { switchedFavourite } = allItemsSlice.actions;
export default allItemsSlice.reducer;