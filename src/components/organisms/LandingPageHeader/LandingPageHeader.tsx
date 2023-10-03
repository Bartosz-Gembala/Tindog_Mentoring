import { Button } from '../../atoms/Button/Button'
import { Logo } from '../../atoms/Logo/Logo'
import { Navigation } from '../../molecules/Navigation/Navigation'
import { FC } from 'react'

interface ILandingPageHeaderProps {
  onOpenAuth: () => void
}

export const LandingPageHeader: FC<ILandingPageHeaderProps> = ({ onOpenAuth }) => {
  return (
    <div className="p-9 shadow-navigation flex flex-row items-end justify-between ">
      <div className="flex flex-row items-end gap-5">
        <Logo />
        <Navigation />
      </div>
      <Button onClick={onOpenAuth} variant="nav">
        Login
      </Button>
    </div>
  )
}
