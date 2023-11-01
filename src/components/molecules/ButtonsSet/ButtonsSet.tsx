import { FC } from 'react'
import { Button, IButtonProps } from '../../atoms/Button/Button'

export interface IButtonConfig {
  text: string
  variant: IButtonProps['variant']
  onClick: () => void
}

interface IButtonsSetProps {
  buttons: IButtonConfig[]
}

export const ButtonsSet: FC<IButtonsSetProps> = ({ buttons }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      {buttons.map(({ variant, text, onClick }, index) => (
        <Button key={index + text} onClick={onClick} variant={variant}>
          {text}
        </Button>
      ))}
    </div>
  )
}
