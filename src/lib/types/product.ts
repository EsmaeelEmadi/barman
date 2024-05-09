import {IProductReview } from "./productReview"

export interface IProduct {
    id: string
    productId: string
    createAt: string
    name: string
    price: string
    image: string
    detail: string
    reviews: IProductReview[]
}