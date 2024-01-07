import { createContext, useContext } from "react";

interface IAuthContext {
  isAuth?: boolean;
  token?: string | null;
  userName?: string | null;
  setUserName: (userId: string | null) => void;
  setNewUserData: (token: string | null, userName: string | null) => void;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useMainPageContext must be used within a MainPageContextProvider"
    );
  }
  return context;
};
