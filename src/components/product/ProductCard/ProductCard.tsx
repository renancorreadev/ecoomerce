import { Product } from '@common/types/products'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductCard.module.css'

interface ProductProps {
  product: Product
}
const productImage = '/product-image-placeholder.svg'
const ProductCard: FC<ProductProps> = ({ product }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`products/${product.slug}`}>
      <a className={styles.root}>
        <div className={styles.productBG} />
        <div className={styles.productTag}>
          <h3 className={styles.productTitle}>
            {' '}
            <span> {product.name}</span>{' '}
          </h3>
          <span className={styles.productPrice}>14 $</span>

          {product.images && (
            <Image
              alt={product.name}
              src={product.images[0].url ?? productImage}
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
