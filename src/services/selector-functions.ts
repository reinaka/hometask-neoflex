import { TStore } from "./store";

export function selectTotalQuantity (store : TStore) {
    return store.basket.totalQuantity;
}

export function selectTotalCost (store : TStore) {
    return store.basket.totalCost;
}

export function selectBasket (store : TStore) {
    return store.basket.items_basket;
}