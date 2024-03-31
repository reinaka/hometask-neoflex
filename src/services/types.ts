export type TItem = {
    id: string,
    img: string,
    title: string,
    price: number,
    rate: number,
    discount: boolean,
    previousPrice? : number,
    type: string,
    favorite: boolean
}

export type TBasketItem = {
    item : TItem,
    quantity : number
}