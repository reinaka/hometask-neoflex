import { combineReducers } from 'redux';
import { basketReducer } from './basket-reducer';
import { currentItemReducer } from './current-item.reducer';

export const rootReducer = combineReducers({
    basket : basketReducer,
    currentItem : currentItemReducer
})