import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { UIProvider } from '@components/ui/context'

import '@styles/main.css'

const Noop: FunctionComponent = ({ children }) => <>{children}</>

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FunctionComponent } }) {
  const Layout = Component.Layout ?? Noop

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}
