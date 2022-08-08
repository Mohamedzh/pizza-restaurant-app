export interface MenuType {
    category: CategoryType,
    name: string,
    popular: boolean,
    price: number,
    description: string,
    imageUrl: string,
    orderlines?: []
    id: number
    orderQty?: number,
}

export interface CategoryType {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    products: []
}

// export interface CartType {
//     category?: CategoryType,
//     name?: string,
//     popular?: boolean,
//     price?: number,
//     description?: string,
//     imageUrl?: string,
//     orderlines?: [],
//     orderQty?: number,
//     id?: number
// }


export interface OrderType {
    name?: string,
    address?: string,
    city?: string,
    mobile?: number,
    orderlines?: OrderLinesType[],
    orderNo?: number,
    id?: number,
    completed?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface OrdersActionType {
    type: string,
    payload: OrderType
}

export interface OrdersReducerType {
    orderReducer: OrderType[]
}

export interface OrderLinesType {
id: number,
orderId:number,
product: MenuType,
quantity: number,
createdAt: Date,
updatedAt: Date
}

export interface CheckoutObjectType {
    id?: number,
    quantity?: number
}