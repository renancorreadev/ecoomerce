import { FunctionComponent } from 'react'
import styles from './styles.module.css'
import { Footer, Navbar } from '@components/common'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/cart'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
