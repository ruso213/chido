export interface Productos{
    id: string,
    title: string,
    price: number,
    description:string,
    images:string[]
    category:{
        id: number,
        name: string,
        typeImg: string}
}

export interface ProductDTO extends Omit<Productos, 'id' | 'category'>{
    categoryId: number
}
export interface EditProductDTO extends Partial<ProductDTO> {
}
export interface categories {
        id: number,
        name: string,
        typeImg: string
    
}


