export interface menuTypes {
    category: categoryTypes,
    name: string,
    popular: boolean,
    price: number,
    description: string,
    imageUrl: string
    
}

export interface categoryTypes {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date
}