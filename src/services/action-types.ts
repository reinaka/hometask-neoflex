import { TBasketItem, TItem } from "./types";

export const ADD_TO_BASKET : 'ADD_TO_BASKET' = 'ADD_TO_BASKET';
export const DELETE_FROM_BASKET : 'DELETE_FROM_BASKET' = 'DELETE_FROM_BASKET';
export interface IAddToBasket {
    readonly type: typeof ADD_TO_BASKET,
    readonly payload: TItem
}
export interface deleteFromBasket {
    readonly type: typeof DELETE_FROM_BASKET,
    readonly payload: TBasketItem,
}
export type basketActions = IAddToBasket | deleteFromBasket;
