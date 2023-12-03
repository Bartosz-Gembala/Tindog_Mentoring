import { createContext } from "react";
import { FC, ReactNode } from "react";
import { useState, useEffect } from "react";

interface IAuthContext {
  isAuth?: boolean;
  setNewToken: (token: string | null) => void;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  console.log("AuthContextProvider");

  const [token, setToken] = useState<string | null>();
  const [isAuth, setIsAuth] = useState<boolean>();

  const setNewToken = (token: string | null) => {
    setToken(token);
    setIsAuth(!!token);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setNewToken(savedToken);
  }, []);

  const contextValue = { isAuth, setNewToken };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
