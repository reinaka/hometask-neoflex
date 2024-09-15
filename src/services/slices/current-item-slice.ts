import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    item : {
        id: '',
        img: '',
        title: '',
        price: 0,
        rate: 0,
        discount: false,
        previousPrice: 0
    },
    selectedItem : false
}

export const currentItemSlice = createSlice({
    name: 'currentItem',
    initialState,
    reducers: {
        addedItemDetails(state, action) {
            return {
                ...state,
                item : action.payload,
                selectedItem: true
            }
        },
        deletedItemDetails(state, action) {
            return initialState;
        }
    }
});

export const { addedItemDetails, deletedItemDetails } = currentItemSlice.actions;
export default currentItemSlice.reducer;