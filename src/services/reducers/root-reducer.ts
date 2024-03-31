import { combineReducers } from 'redux';
import { basketReducer } from './basket-reducer';
import { currentItemReducer } from './current-item.reducer';
import { allItemsReducer } from './all-items-reducer';


export const rootReducer = combineReducers({
    allItems : allItemsReducer,
    basket : basketReducer,
    currentItem : currentItemReducer
})