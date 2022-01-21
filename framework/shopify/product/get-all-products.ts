import getAllProductsQuery from '../utils/queries/get-all-products'
import { normalizeProduct } from '../utils/normalize'
import fetchApi from '../utils/fetch-api'
import { ProductConnection } from '../schema'

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery })
  //Normalize and return the data
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product)
    }) ?? []
  return products
}

export default getAllProducts
