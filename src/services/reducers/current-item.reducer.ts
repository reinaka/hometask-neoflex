import { itemDetailsActions } from "../actions/action-types-item-details";

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

export const currentItemReducer = (state = initialState, action : itemDetailsActions) => {
    switch (action.type) {
        case 'ADD_ITEM_DETAILS' : {
            return {
                ...state,
                item : action.payload,
                selectedItem: true
            }
        }
        case 'DELETE_ITEM_DETAILS' : {
            return initialState
        }
        default : {
            return state
        }
    }
}