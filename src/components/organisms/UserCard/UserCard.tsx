import { FC, useState } from 'react'
import { Card } from '../../atoms/Card/Card'
import { IButtonConfig, ButtonsSet } from '../../molecules/ButtonsSet/ButtonsSet'
import { IUser } from '../../../shared/types/users'

export const UserCard: FC<{ user: IUser }> = ({ user }) => {
  const { name, age, description, gallery: images } = user
  const max = images.length - 1
  const min = 0

  const [imageDisplayed, setImageDisplayed] = useState<number>(min)

  const handleNextImage = () => {
    imageDisplayed + 1 > max ? setImageDisplayed(0) : setImageDisplayed((prevState) => prevState + 1)
    console.log(imageDisplayed)
  }

  const handlePrevImage = () => {
    imageDisplayed - 1 < min ? setImageDisplayed(max) : setImageDisplayed((prevState) => prevState - 1)
    console.log(imageDisplayed)
  }

  const buttonsConfig: IButtonConfig[] = [
    { text: 'X', variant: 'round', onClick: () => {} },
    { text: 'X', variant: 'round', onClick: () => {} },
    { text: 'X', variant: 'round', onClick: () => {} },
  ]

  const topButtonsConfig: IButtonConfig[] = [
    { text: '', variant: 'image', onClick: handlePrevImage },
    { text: '', variant: 'image', onClick: handleNextImage },
  ]

  return (
    <Card>
      <div className="relative h-full rounded-lg overflow-hidden">
        <div className="absolute h-1/4 inset-2 flex flex-column justify-center items-start">
          <ButtonsSet buttons={topButtonsConfig} />
        </div>
        <img src={images[imageDisplayed]} alt="user-pic" className="w-full h-full object-cover" />

        <div style={{ top: '75%' }} className="absolute h-1/4 inset-0 py-5">
          <p className="text-white px-2 mb-2">{name}</p>
          <ButtonsSet buttons={buttonsConfig} />
        </div>
      </div>
    </Card>
  )
}
