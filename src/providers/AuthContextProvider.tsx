import { FC, ReactNode } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth-context";

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>();
  const [isAuth, setIsAuth] = useState<boolean>();
  const [userName, setUserName] = useState<string | null>();

  const setNewUserData = (
    newToken: string | null,
    newUserName: string | null
  ) => {
    setToken(newToken);
    setUserName(newUserName);
    setIsAuth(!!token);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUserName = localStorage.getItem("userName");

    setNewUserData(savedToken, savedUserName);
  }, []);

  const contextValue = { isAuth, token, userName, setUserName, setNewUserData };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
