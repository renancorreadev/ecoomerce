export interface ProductImage {
  url: string
  alt?: string
}

export interface ProductPrice {
  value: number
  currencyCode: 'BRL' | 'USD' | string
}
export interface Product {
  id: string
  name: string
  description: string
  slug: string
  path: string
  images: ProductImage[]
  price: ProductPrice
}
