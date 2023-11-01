import { FC } from 'react'
import { Header } from '../../atoms/Header/Header'
import { Button } from '../../atoms/Button/Button'
import { ButtonsSet, IButtonConfig } from '../../molecules/ButtonsSet/ButtonsSet'

const headerButtons: IButtonConfig[] = [
  { variant: 'round', text: 'X', onClick: () => {} },
  { variant: 'round', text: 'X', onClick: () => {} },
  { variant: 'round', text: 'X', onClick: () => {} },
]

export const Sidebar: FC = () => {
  return (
    <div className="h-screen w-1/4 border bg-white border-primary">
      <Header className="h-24 flex justify-between items-center p-5">
        <Button variant="round">I</Button>
        <div>
          <ButtonsSet buttons={headerButtons} />
        </div>
      </Header>
      <div className="h-1/4 bg-background"></div>
      <div className="flex gap-5 p-5">
        <Button variant="link">Matches</Button>
        <Button variant="link">Messages</Button>
      </div>
    </div>
  )
}
