import { FunctionComponent } from 'react'
import styles from './styles.module.css'
import { Footer, Navbar } from '@components/common'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
