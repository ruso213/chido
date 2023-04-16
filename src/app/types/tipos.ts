export interface Productos{
    title: string
    price:number
    description:string
    images:string[]
    category: {
      id:number,
      name: string,
      image: string,
      creationAt:string ,
      updatedAt: string
    },
    id: number
    creationAt: string
    updatedAt: string
}

export interface ProductDTO extends Omit<Productos, 'id' | 'category' | 'creationAt' | 'updatedAt'>{
    categoryId: number
}
export interface EditProductDTO extends Partial<ProductDTO> {
}
export interface categories {
        id: number,
        name: string,
        image: string
    
}

export interface productCreate {
    title: string
    price: number
    description: string
    categoryId: number
    images: string[]
}


