import { createSlice } from '@reduxjs/toolkit';
import { TCartItem } from "../types";

type TState = {
    items_cart : TCartItem[] | [],
    totalCost : number, 
    totalQuantity : number
}

export const initialState : TState = {
    items_cart : [],
    totalCost : 0,
    totalQuantity : 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addedToCart(state, action) {
            let newQiantity = state.totalQuantity + 1;
            let newTotalCost = state.totalCost + action.payload.price;
            let contains = false;
            let newArr = state.items_cart.map((elem : TCartItem) => {
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
                    items_cart: newArr,
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
                    items_cart: [...state.items_cart, newItem],
                    totalCost: newTotalCost,
                    totalQuantity: newQiantity
                }
            }
        },
        removedFromCart(state, action) {
            let newArr = state.items_cart.filter((elem : TCartItem) => {
                return elem.item.id !== action.payload.id;
            });
            let newQiantity = state.totalQuantity - action.payload.quantity;
            let newTotalCost = state.totalCost - (action.payload.price * action.payload.quantity);
            return {
                ...state,
                items_cart: newArr,
                totalCost: newTotalCost,
                totalQuantity: newQiantity
            }
        },
        increasedCartQuantity(state, action) {
            let newQiantity = state.totalQuantity + 1;
            let newTotalCost = state.totalCost + action.payload.price;
            let newArr = state.items_cart.map((elem : TCartItem) => {
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
                items_cart: newArr,
                totalCost: newTotalCost,
                totalQuantity: newQiantity
            }
        },
        decreasedCartQuantity(state, action) {
            let newQiantity = state.totalQuantity - 1;
            let newTotalCost = state.totalCost - action.payload.price;
            let newArr = state.items_cart.map((elem : TCartItem) => {
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
                items_cart: newArr,
                totalCost: newTotalCost,
                totalQuantity: newQiantity
            }
        },
        removedAllItems() {
            return initialState;
        }
    }
});

export const { addedToCart, removedFromCart, increasedCartQuantity, decreasedCartQuantity, removedAllItems } = cartSlice.actions;
export default cartSlice.reducer;