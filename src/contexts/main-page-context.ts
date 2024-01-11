import { createContext, useContext } from "react";
import { IUser } from "../shared/types/users";

interface IMainPageContext {
  matches: IUser[];
  messageTargetUser: IUser | null;
  addMatch: (match: IUser) => void;
  setMessageTargetUser: (user: IUser | null) => void;
}

export const MainPageContext = createContext<IMainPageContext>({
  matches: [],
  messageTargetUser: null,
  addMatch: () => {},
  setMessageTargetUser: () => {},
} as IMainPageContext);

export const useMainPageContext = () => {
  const context = useContext(MainPageContext);
  if (!context) {
    throw new Error(
      "useMainPageContext must be used within a MainPageContextProvider"
    );
  }
  return context;
};
