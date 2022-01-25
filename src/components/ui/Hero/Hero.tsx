import { FC } from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import { Container } from '@components/ui'

interface HeroProps {
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container className="px-11 mx-auto bg-black p-8 max-w-8xl">
        <div className={styles.root}>
          <h2 className={styles.headline}>{headline}</h2>

          <div>
            <p className={styles.description}>{description}</p>
          </div>

          <Link href="/products">
            <a className={styles.link}>Read it here</a>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Hero
