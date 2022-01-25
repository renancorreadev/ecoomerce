import { ReactNode, FC, ComponentType, HTMLAttributes } from 'react'

interface ContainerProps {
  children: ReactNode | ReactNode[]
  className?: HTMLAttributes<HTMLDivElement>['className']
  element?: ComponentType<HTMLAttributes<HTMLElement>>
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
