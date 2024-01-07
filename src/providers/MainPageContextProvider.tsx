import { FC, ReactNode, useState } from "react";
import { IUser } from "../shared/types/users";
import { MainPageContext } from "../contexts/main-page-context";

export const MainPageContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [matches, setMatches] = useState<IUser[]>([]);
  const [messageTargetUser, setMessageTargetUser] = useState<IUser | null>(
    null
  );

  const addMatch = (match: IUser) => {
    if (matches.some((m) => m.id === match.id)) {
      return;
    }
    setMatches((prev) => [...prev, match]);
  };

  const contextValue = {
    matches,
    messageTargetUser,
    setMessageTargetUser,
    addMatch,
  };

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};
