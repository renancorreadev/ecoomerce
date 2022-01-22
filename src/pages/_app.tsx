import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import '@styles/main.css'

const Noop: FunctionComponent = ({ children }) => <>{children}</>

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FunctionComponent } }) {
  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
