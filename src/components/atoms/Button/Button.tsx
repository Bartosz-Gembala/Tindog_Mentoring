import { FC } from 'react'

interface IButtonProps {
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'nav'
  children?: string | JSX.Element
}

function getButtonClasses(variant: IButtonProps['variant']) {
  switch (variant) {
    case 'primary':
      return 'bg-primary py-2 px-2 rounded text-center text-xl text-white hover:contrast-150'
    case 'secondary':
      return '' //TO figure out how that button will look like later
    case 'nav':
      return 'bg-primary transition duration-300 hover:scale-110 text-2xl text-white font-bold py-2 px-6 rounded'
  }
}

export const Button: FC<IButtonProps> = ({ onClick, variant = 'primary', children }) => (
  <div className={getButtonClasses(variant)}>
    <button onClick={onClick}>{children}</button>
  </div>
)
