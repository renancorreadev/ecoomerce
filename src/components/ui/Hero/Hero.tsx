import { FC } from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import { Container } from '@components/ui'

interface Props {
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={styles.root}>
          <h2 className={styles.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={styles.description}>{description}</p>
            <Link href="/">
              <a className={styles.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
