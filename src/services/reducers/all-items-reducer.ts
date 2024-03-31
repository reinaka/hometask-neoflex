import { allItemsActions } from '../actions/action-types-allItems';
import { items } from '../data';
import { TItem } from '../types';

let initialState = items;

export const allItemsReducer = (state = initialState, action : allItemsActions) => {
    switch(action.type) {
        case 'SWITCH_FAVORITE' : {
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
        default : {
            return state;
        }
    }
}