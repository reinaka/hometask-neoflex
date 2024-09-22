import { TStore } from "./store";

export function selectAllItems (store : TStore) {
    return store.allItems;
}

export function selectTotalQuantity (store : TStore) {
    return store.cart.totalQuantity;
}

export function selectTotalCost (store : TStore) {
    return store.cart.totalCost;
}

export function selectCart (store : TStore) {
    return store.cart.items_cart;
}

export function selectItemDetails (store : TStore) {
    return store.currentItem;
}