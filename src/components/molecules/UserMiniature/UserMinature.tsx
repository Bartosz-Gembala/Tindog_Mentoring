import { FC } from "react";
import { IUser } from "../../../shared/types/users";
import { useMainPageContext } from "../../../contexts/main-page-context";

interface IUserMiniatureProps {
  user: IUser;
}

export const UserMiniature: FC<IUserMiniatureProps> = ({ user }) => {
  const { name, gallery } = user;
  const { setMessageTargetUser } = useMainPageContext();

  const handleClick = () => {
    setMessageTargetUser(user);
  };

  return (
    <div className="border" onClick={handleClick}>
      <img className="h-[5rem] w-[8rem]" src={gallery[0]} />
      <div className="px-1 py-1">{name}</div>
    </div>
  );
};
