import { FC } from 'react'
import styles from './Swatch.module.css'
import { Check } from '@components/icons'
import cn from 'classnames'
import { isDark } from '@lib/color'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  label?: string
  active?: boolean
  variant?: 'size' | 'color' | string
  onClick: () => void
}

const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  size = 'md',
  ...rest
}) => {
  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  const rootClassName = cn(styles.root, {
    [styles.active]: active,
    [styles.color]: color,
    [styles.size]: variant === 'size',
    [styles.dark]: color && isDark(color),
    [styles.sm]: size === 'sm',
  })

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </button>
  )
}

export default Swatch
