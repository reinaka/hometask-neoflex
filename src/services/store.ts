import { allItemsSlice } from './slices/all-items-slice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './reducers/basket-reducer';
import { currentItemReducer } from './reducers/current-item.reducer';

export const store = configureStore({
    reducer: combineReducers({
        allItems : allItemsSlice.reducer,
        basket : basketReducer,
        currentItem : currentItemReducer,
    }),
});

export type TStore = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;