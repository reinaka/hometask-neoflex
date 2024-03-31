import { TItem } from "../types";

export const ADD_ITEM_DETAILS : 'ADD_ITEM_DETAILS' = 'ADD_ITEM_DETAILS';
export const DELETE_ITEM_DETAILS : 'DELETE_ITEM_DETAILS' = 'DELETE_ITEM_DETAILS';

export interface IAddItemDetails {
    readonly type: typeof ADD_ITEM_DETAILS,
    readonly payload: TItem
}

export interface IDeleteItemDetails {
    readonly type: typeof DELETE_ITEM_DETAILS,
}

export type itemDetailsActions = IAddItemDetails | IDeleteItemDetails;