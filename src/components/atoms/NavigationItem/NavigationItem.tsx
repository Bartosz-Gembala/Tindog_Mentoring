import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface INavigationItemProps extends NavLinkProps {
  title: string
}

export const NavigationItem: FC<INavigationItemProps> = ({ title, to }) => (
  <li className="hover:scale-110 transition duration-300">
    <NavLink to={to}>{title}</NavLink>
  </li>
)
