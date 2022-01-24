import { Product } from '@common/types/products'
import { FC } from 'react'

interface ProductProps {
  product: Product
}

const ProductCard: FC<ProductProps> = ({ product }) => {
  return <div className="product-card">{product.name}</div>
}

export default ProductCard
