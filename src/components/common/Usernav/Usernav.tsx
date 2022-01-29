import { FC } from 'react'
import styles from './Usernav.module.css'
import Link from 'next/link'

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>Cart</li>
        <li className={styles.item}>
          <Link href="/">
            <a>Wishlist</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
