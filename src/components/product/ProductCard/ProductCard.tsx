import { Product } from '@common/types/products'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductCard.module.css'

interface ProductProps {
  product: Product
  variant?: 'simple' | 'slim'
}
const productImage = '/product-image-placeholder.svg'
const ProductCard: FC<ProductProps> = ({ product, variant = 'simple' }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`products/${product.slug}`}>
      <a className={styles.root}>
        {variant === 'slim' ? (
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20 ">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>

            {product.images && (
              <Image
                className={styles.productImage}
                alt={product.name}
                src={product.images[0].url ?? productImage}
                width={320}
                height={320}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
            <div className={styles.productBG} />
            <div className={styles.productTag}>
              <h3 className={styles.productTitle}>
                {' '}
                <span> {product.name}</span>{' '}
              </h3>
              <span className={styles.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>

              {product.images && (
                <Image
                  className={styles.productImage}
                  alt={product.name}
                  src={product.images[0].url ?? productImage}
                  width={540}
                  height={540}
                  quality="85"
                  layout="responsive"
                />
              )}
            </div>
          </>
        )}
      </a>
    </Link>
  )
}

export default ProductCard
