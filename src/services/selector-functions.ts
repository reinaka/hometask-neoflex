import { TStore } from "./store";

export function selectTotalQuality (store : TStore) {
    return store.basket.totalQuantity;
}