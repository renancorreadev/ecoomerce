import { ReactNode, FC, HTMLAttributes } from 'react'

interface ContainerProps {
  children: ReactNode | ReactNode[]
  className?: HTMLAttributes<HTMLDivElement>['className']
  element?: any
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  element: Component = 'div',
}) => {
  return (
    <Component className={className} style={{ maxWidth: '1920px' }}>
      {children}
    </Component>
  )
}

export default Container
