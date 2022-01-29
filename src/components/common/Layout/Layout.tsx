import { FunctionComponent } from 'react'
import styles from './styles.module.css'
import { Footer, Navbar } from '@components/common'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/cart'
import { useUI } from '@components/ui/context'

const Layout: FunctionComponent = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
