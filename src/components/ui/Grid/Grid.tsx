import { ReactNode, FC } from 'react'

const Grid: FC<ReactNode> = ({ children }) => {
  return <div className="root-grid">{children}</div>
}

export default Grid
