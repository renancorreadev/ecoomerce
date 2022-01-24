import { FunctionComponent } from 'react'
import styles from './styles.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <main className={styles.root}>{children}</main>
    </>
  )
}

export default Layout
