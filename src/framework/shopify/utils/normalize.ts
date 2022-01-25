import { ImageEdge, MoneyV2, Product as ShopifyProduct } from '../schema'
import { Product } from '@common/types/products'

function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    }
  })
}

function normalizeProductPrice({ currencyCode, amount }: MoneyV2) {
  return {
    //+amount = convert string to number
    value: +amount,
    currencyCode,
  }
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode
  const product = {
    id,
    name,
    vendor,
    description,
    path: `${handle}`,
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    slug: handle.replace(/^\/+|\/+$/g, ''),
    ...rest,
  }

  return product
}
