import { TStore } from "./store";

export function selectAllItems (store : TStore) {
    return store.allItems;
}

export function selectTotalQuantity (store : TStore) {
    return store.basket.totalQuantity;
}

export function selectTotalCost (store : TStore) {
    return store.basket.totalCost;
}

export function selectBasket (store : TStore) {
    return store.basket.items_basket;
}

export function selectItemDetails (store : TStore) {
    return store.currentItem;
}