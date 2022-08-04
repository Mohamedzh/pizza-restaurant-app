export interface MenuType {
    category?: CategoryType,
    name?: string,
    popular?: boolean,
    price?: number,
    description?: string,
    imageUrl?: string,
    orderlines?: []
    id?: number
    orderQty?: number,

}

export interface MenuActionType {
    type: string,
    payload: MenuType
}

export interface MenuReducerType {
    menuReducer: MenuType[]
}
export interface CategoryType {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    products: []
}

export interface CartType {
    category?: CategoryType,
    name?: string,
    popular?: boolean,
    price?: number,
    description?: string,
    imageUrl?: string,
    orderlines?: [],
    orderQty?: number,
    id?: number
}

export interface CartActionType {
    type: string,
    payload: MenuType
}

export interface CartReducerType {
    cartReducer: MenuType[]
}

export interface OrdersType {
    name: string,
    address: string,
    city: string,
    mobile: number,
    orderlines: OrderLinesType[],
    orderNo: number,
    id: number,
    completed: boolean,
    createdAt: Date,
    updatedAt: Date
}

export interface OrdersActionType {
    type: string,
    payload: OrdersType
}

export interface OrdersReducerType {
    orderReducer: OrdersType[]
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
    number: number
}