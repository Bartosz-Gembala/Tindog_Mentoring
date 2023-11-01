import { FC, ReactNode } from 'react'

interface IHeaderProps {
  children: ReactNode
  className?: string
}
export const Header: FC<IHeaderProps> = ({ children, className }) => {
  return <div className={`w-full bg-primary ${className}`}>{children}</div>
}
