import { FC, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth-context";

export const ProtectedRouteWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);

  !isAuth && navigate("/");
  return <>{children}</>;
};
