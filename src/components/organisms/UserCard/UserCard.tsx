import { FC, useState } from "react";
import { Card } from "../../atoms/Card/Card";
import {
  IButtonConfig,
  ButtonsSet,
} from "../../molecules/ButtonsSet/ButtonsSet";
import { IUser } from "../../../shared/types/users";

interface IUserCardProps {
  user: IUser;
  onRejectUser: () => void;
  onAcceptUser: () => void;
}

export const UserCard: FC<IUserCardProps> = ({
  user,
  onRejectUser,
  onAcceptUser,
}) => {
  const { name, age, description, gallery: images } = user;
  const max = images.length - 1;
  const min = 0;

  const [imageDisplayed, setImageDisplayed] = useState<number>(min);

  const handleNextImage = () => {
    imageDisplayed + 1 > max
      ? setImageDisplayed(0)
      : setImageDisplayed((prevState) => prevState + 1);
  };

  const handlePrevImage = () => {
    imageDisplayed - 1 < min
      ? setImageDisplayed(max)
      : setImageDisplayed((prevState) => prevState - 1);
  };

  const buttonsConfig: IButtonConfig[] = [
    { text: "X", variant: "round", onClick: () => onRejectUser() },
    { text: "L", variant: "round", onClick: () => onAcceptUser() },
  ];

  const topButtonsConfig: IButtonConfig[] = [
    { text: "", variant: "image", onClick: handlePrevImage },
    { text: "", variant: "image", onClick: handleNextImage },
  ];

  return (
    <Card>
      <div className="relative h-full rounded-lg overflow-hidden">
        <div className="absolute h-1/4 inset-2 flex flex-column justify-center items-start">
          <ButtonsSet buttons={topButtonsConfig} />
        </div>
        <img
          src={images[imageDisplayed]}
          alt="user-pic"
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        <div
          style={{ top: "65%" }}
          className="shadow-navigation absolute m-1 rounded inset-0 text-white text-xl"
        >
          <p className=" px-2 mb-2">
            {name} {age}
          </p>
          <p className="px-2 mb-5">{description}</p>
          <ButtonsSet buttons={buttonsConfig} />
        </div>
      </div>
    </Card>
  );
};
