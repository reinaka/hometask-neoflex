export type TItem = {
    id: string,
    img: string,
    title: string,
    price: number,
    rate: number,
    discount: boolean,
    previousPrice? : number
}

export type TBasketItem = {
    item : TItem,
    quantity : number
}