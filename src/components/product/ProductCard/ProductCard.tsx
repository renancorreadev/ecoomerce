import { Product } from '@common/types/products'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductProps {
  product: Product
}
const productImage = '/product-image-placeholder.svg'
const ProductCard: FC<ProductProps> = ({ product }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`products/${product.slug}`}>
      <a>
        <div className="product-card">
          <h3>
            {' '}
            <span> {product.name}</span>{' '}
          </h3>
          <span>14 $</span>

          {product.images && (
            <Image
              alt={product.name}
              src={productImage}
              width={540}
              height={540}
              quality="85"
              layout="responsive"
            />
          )}
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
