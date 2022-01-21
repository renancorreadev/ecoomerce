import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/get-all-products'

export async function getStaticProps() {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{products ? JSON.stringify(products) : <h2>error!</h2>}</div>
}

export const teste = 'teste'
