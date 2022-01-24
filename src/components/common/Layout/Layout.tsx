import { FunctionComponent } from 'react'
import styles from './styles.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.root}>
      <main className="fit">{children}</main>
    </div>
  )
}

export default Layout
