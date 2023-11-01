import { ButtonHTMLAttributes, FC } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'nav' | 'round' | 'link'
}

function getButtonClasses(variant: IButtonProps['variant']) {
  switch (variant) {
    case 'primary':
      return 'bg-primary py-2 px-2 rounded text-center text-xl text-white hover:contrast-150'
    case 'secondary':
      return '' //TO figure out how that button will look like later
    case 'nav':
      return 'bg-primary transition duration-300 hover:scale-110 text-2xl text-white font-bold py-2 px-6 rounded'
    case 'round':
      return 'bg-icon border-primary text-primary rounded-full py-2 px-2 w-12 h-12 flex items-center justify-center transform transition duration-300 hover:scale-110'
    case 'link':
      return 'text-xl hover:scale-110'
  }
}

export const Button: FC<IButtonProps> = ({ onClick, variant = 'primary', children }) => (
  <div className={getButtonClasses(variant)}>
    <button onClick={onClick}>{children}</button>
  </div>
)
