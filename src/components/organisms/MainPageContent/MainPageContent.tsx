import { FC } from 'react'
import { Card } from '../../atoms/Card/Card'
import { IButtonConfig, ButtonsSet } from '../../molecules/ButtonsSet/ButtonsSet'

const buttonsConfig: IButtonConfig[] = [
  { text: 'X', variant: 'round', onClick: () => {} },
  { text: 'X', variant: 'round', onClick: () => {} },
  { text: 'X', variant: 'round', onClick: () => {} },
  { text: 'X', variant: 'round', onClick: () => {} },
  { text: 'X', variant: 'round', onClick: () => {} },
]

export const MainPageContent: FC = () => {
  return (
    <div className="flex h-screen w-3/4  items-center rounded justify-center">
      <Card>
        <div className="relative h-full rounded-lg overflow-hidden">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-column justify-center items-end py-5">
            <ButtonsSet buttons={buttonsConfig} />
          </div>
        </div>
      </Card>
    </div>
  )
}
