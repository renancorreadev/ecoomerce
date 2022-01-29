import { ReactNode, FC } from 'react'
import styles from './Marquee.module.css'

interface MarqueeProps {
  children: ReactNode
}

const Marquee: FC<MarqueeProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

export default Marquee
