import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface INavigationItemProps {
  title: string
  to: string
}

export const NavigationItem: FC<INavigationItemProps> = ({ title, to }) => (
  <li className="hover:scale-110 transition duration-300">
    <NavLink to={to}>{title}</NavLink>
  </li>
)
