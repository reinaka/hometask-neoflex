import { allItemsSlice } from './slices/all-items-slice';
import { cartSlice } from './slices/cart-slice';
import { configureStore } from '@reduxjs/toolkit';
import { currentItemSlice } from './slices/current-item-slice';

export const store = configureStore({
    reducer: {
        allItems : allItemsSlice.reducer,
        cart : cartSlice.reducer,
        currentItem : currentItemSlice.reducer,
    },
});

export type TStore = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;