import { ImageEdge, Product as ShopifyProduct } from '../schema'
import { Product } from '../../common/types/products'

function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode
  const product = {
    id,
    name,
    vendor,
    description,
    path: `${handle}`,
    images: normalizeProductImages(imageConnection),
    slug: handle.replace(/^\/+|\/+$/g, ''),
    ...rest,
  }

  return product
}
