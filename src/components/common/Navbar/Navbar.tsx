import { Container } from '@components/ui'
import { FC } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <Container>
      <div className="flex flex-1 items-center">
        <div className={styles.root}>
          <Link href="/">
            <a className={styles.logo}>XStore</a>
          </Link>

          <nav className="ml-6 space-x-6 mt-1">
            <Link href="/">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Acessories</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
