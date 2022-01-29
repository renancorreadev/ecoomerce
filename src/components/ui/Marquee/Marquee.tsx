import { ReactNode, FC } from 'react'
import styles from './Marquee.module.css'
import Ticker from 'react-ticker'

interface MarqueeProps {
  children: ReactNode
}

const Marquee: FC<MarqueeProps> = ({ children }) => {
  return (
    <Ticker>
      {() => (
        <div className={styles.root}>
          <div className={styles.container}>{children}</div>
        </div>
      )}
    </Ticker>
  )
}

export default Marquee
