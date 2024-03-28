export type TCard = {
    id: string,
    img: string,
    title: string,
    price: number,
    rate: number,
    discount: boolean,
    previousPrice? : number
}