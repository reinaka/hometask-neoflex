import { basketActions } from "../action-types-basket";
import { TBasketItem } from "../types";

type TState = {
    items_basket : TBasketItem[] | [],
    totalCost : number, 
    totalQuantity : number
}

export const initialState = {
    items_basket : [],
    totalCost : 0,
    totalQuantity : 0
}

export const basketReducer = (state = initialState, action : basketActions) : TState => {
    switch(action.type) {
        case 'ADD_TO_BASKET' : {
            let newQiantity = state.totalQuantity + 1;
            let newTotalCost = state.totalCost + action.payload.price;
            let contains = false;
            let newArr = state.items_basket.map((elem : TBasketItem) => {
                // проверяем, есть ли уже в корзине товар в таким айдишником
                if (elem.item.id === action.payload.id) {
                    let newQuantity = elem.quantity + 1;
                    let newItem = {
                        item: elem.item,
                        quantity: newQuantity
                    };
                    contains = true;
                    return newItem;
                } else {
                    return elem;
                }
            });
            if (contains) {
                return {
                    ...state,
                    items_basket: newArr,
                    totalCost: newTotalCost,
                    totalQuantity: newQiantity
                }
            } else {
                let newItem = {
                    item: action.payload,
                    quantity: 1
                }
                return {
                    ...state,
                    items_basket: [...state.items_basket, newItem],
                    totalCost: newTotalCost,
                    totalQuantity: newQiantity
                }
            }
        }
        case 'REMOVE_FROM_BASKET' : {
            let newArr = state.items_basket.filter((elem : TBasketItem) => {
                return elem.item.id !== action.payload.id;
            });
            let newQiantity = state.totalQuantity - action.payload.quantity;
            let newTotalCost = state.totalCost - (action.payload.price * action.payload.quantity);
            return {
                ...state,
                items_basket: newArr,
                totalCost: newTotalCost,
                totalQuantity: newQiantity
            }
        }
        case 'INCREASE_BASKET_QUANTITY' : {
            let newQiantity = state.totalQuantity + 1;
            let newTotalCost = state.totalCost + action.payload.price;
            let newArr = state.items_basket.map((elem : TBasketItem) => {
                if (elem.item.id === action.payload.id) {
                    let newItem = {
                        item: elem.item,
                        quantity: elem.quantity + 1
                    }
                    return newItem;
                } else return elem;
            })
            return {
                ...state,
                items_basket: newArr,
                totalCost: newTotalCost,
                totalQuantity: newQiantity
            }
        }
        case 'DECREASE_BASKET_QUANTITY' : {
            let newQiantity = state.totalQuantity - 1;
            let newTotalCost = state.totalCost - action.payload.price;
            let newArr = state.items_basket.map((elem : TBasketItem) => {
                if (elem.item.id === action.payload.id) {
                        let newItem = {
                            item: elem.item,
                            quantity: elem.quantity - 1
                        }
                        return newItem;
                } else return elem;
            });
            return {
                ...state,
                items_basket: newArr,
                totalCost: newTotalCost,
                totalQuantity: newQiantity
            }
        }
        default : {
            return state;
        }
    }
}
