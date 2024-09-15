import { allItemsSlice } from './slices/all-items-slice';
import { basketSlice } from './slices/basket-slice';
import { configureStore } from '@reduxjs/toolkit';
import { currentItemSlice } from './slices/current-item-slice';

export const store = configureStore({
    reducer: {
        allItems : allItemsSlice.reducer,
        basket : basketSlice.reducer,
        currentItem : currentItemSlice.reducer,
    },
});

export type TStore = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;