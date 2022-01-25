import type { InferGetStaticPropsType } from 'next'
import getAllproducts from '@framework/product/get-all-products'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Hero } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllproducts(config)
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
  return (
    <>
      <Grid>
        {products.slice(0.3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Cake sweet gummies biscuit liquorice cookie caramels lollipop bonbon. Lemon drops marshmallow gummi bears danish croissant lemon drops macaroon sweet roll. Dessert jelly beans cake fruitcake choco"
      />
    </>
  )
}

Home.Layout = Layout
