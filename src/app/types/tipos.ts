export interface Productos{
    id: string,
    title: string,
    price: number,
    description:string,
    images:string[]
    category:string
}

export interface ProductDTO extends Omit<Productos, 'id' | 'category'>{
    categoryId: number
}
export interface EditProductDTO extends Partial<ProductDTO> {
}
