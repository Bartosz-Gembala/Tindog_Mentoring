import { FC, useEffect, useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import { IUser } from "../../../shared/types/users";
import { useHttp } from "../../../hooks/useHttp";
import { useAuthContext } from "../../../contexts/auth-context";
import { useMainPageContext } from "../../../contexts/main-page-context";
import { Modal } from "../Modal/Modal";
import { Chat } from "../Chat/Chat";

let displayedUserIndex = 0;

export const MainPageContent: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [displayedUser, setDisplayedUser] = useState<IUser | null>(null);
  const { addMatch, messageTargetUser, setMessageTargetUser } =
    useMainPageContext();
  const { token } = useAuthContext();
  const { sendRequest: fetchUsers } = useHttp<{ message: IUser[] }>();

  const getUsers = async () => {
    const response = await fetchUsers("/profiles", {
      method: "GET",
      headers: {
        token: token!,
      },
    });
    if (response?.message) {
      setUsers(response.message);
      setDisplayedUser(response.message[displayedUserIndex]);
    }
  };

  const handleRejectUser = () => {
    handleSelectNextUser();
  };

  const handleAcceptUser = () => {
    displayedUser && addMatch(displayedUser);
    handleSelectNextUser();
  };

  const handleSelectNextUser = () => {
    displayedUserIndex += 1;
    if (displayedUserIndex > users.length - 1) {
      displayedUserIndex = 0;
    }
    setDisplayedUser(users[displayedUserIndex]);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {messageTargetUser && (
        <Modal onClose={() => setMessageTargetUser(null)}>{<Chat />}</Modal>
      )}
      <div className="flex h-screen w-3/4  items-center rounded justify-center">
        {displayedUser && (
          <UserCard
            onAcceptUser={handleAcceptUser}
            onRejectUser={handleRejectUser}
            user={displayedUser}
          />
        )}
      </div>
    </>
  );
};
