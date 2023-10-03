import { NavigationItem } from '../../atoms/NavigationItem/NavigationItem'

const Paths = [
  { title: 'Products', to: '/products' },
  { title: 'About', to: '/about' },
]

export const Navigation = () => {
  return (
    <nav className="text-2xl font-bold">
      <ul className="flex flex-row gap-5">
        {Paths.map((path, index) => (
          <NavigationItem {...path} key={path.title + index} />
        ))}
      </ul>
    </nav>
  )
}
