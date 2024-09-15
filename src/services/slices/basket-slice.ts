import { createSlice } from '@reduxjs/toolkit';
import { TBasketItem } from "../types";

type TState = {
    items_basket : TBasketItem[] | [],
    totalCost : number, 
    totalQuantity : number
}

export const initialState : TState = {
    items_basket : [],
    totalCost : 0,
    totalQuantity : 0
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addedToBasket(state, action) {
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
        },
        removedFromBasket(state, action) {
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
        },
        increasedBasketQuantity(state, action) {
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
        },
        decreasedBasketQuantity(state, action) {
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
    }
});

export const { addedToBasket, removedFromBasket, increasedBasketQuantity, decreasedBasketQuantity } = basketSlice.actions;
export default basketSlice.reducer;