import { allItemsSlice } from './slices/all-items-slice';
import { basketSlice } from './slices/basket-slice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { currentItemReducer } from './reducers/current-item.reducer';

export const store = configureStore({
    reducer: combineReducers({
        allItems : allItemsSlice.reducer,
        basket : basketSlice.reducer,
        currentItem : currentItemReducer,
    }),
});

export type TStore = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;