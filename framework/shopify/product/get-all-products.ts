import getAllProductsQuery from '../utils/queries/get-all-products'
import fetchApi from '../utils/fetch-api'
import { ProductConnection } from '../schema'

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery })
  //Normalize and return the data
  return data.products
}

export default getAllProducts
