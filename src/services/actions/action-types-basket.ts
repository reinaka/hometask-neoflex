import { TItem } from "../types";

export const ADD_TO_BASKET : 'ADD_TO_BASKET' = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET : 'REMOVE_FROM_BASKET' = 'REMOVE_FROM_BASKET';
export const INCREASE_BASKET_QUANTITY : 'INCREASE_BASKET_QUANTITY' = 'INCREASE_BASKET_QUANTITY';
export const DECREASE_BASKET_QUANTITY : 'DECREASE_BASKET_QUANTITY' = 'DECREASE_BASKET_QUANTITY';

export interface IAddToBasket {
    readonly type: typeof ADD_TO_BASKET,
    readonly payload: TItem
}

export interface IRemoveFromBasket {
    readonly type: typeof REMOVE_FROM_BASKET,
    readonly payload: {
        id : string,
        price : number,
        quantity : number
    },
}

export interface IIncreaseBasketQuantity {
    readonly type: typeof INCREASE_BASKET_QUANTITY,
    readonly payload : {
        id : string,
        price : number
    }
}

export interface IDecreaseBasketQuantity {
    readonly type: typeof DECREASE_BASKET_QUANTITY,
    readonly payload : {
        id : string,
        price : number
    }
}

export type basketActions = IAddToBasket | IRemoveFromBasket | IIncreaseBasketQuantity | IDecreaseBasketQuantity;
