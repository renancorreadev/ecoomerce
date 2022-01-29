import { ReactNode, FC } from 'react'
import styles from './Marquee.module.css'
import Ticker from 'react-ticker'
import cn from 'classnames'

interface MarqueeProps {
  children: ReactNode[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<MarqueeProps> = ({ children, variant = 'primary' }) => {
  const rootClassName = cn(styles.root, {
    [styles.secondary]: variant === 'secondary',
  })

  return (
    <div className={rootClassName}>
      <Ticker>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default Marquee
