import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth-context";

export const ProtectedRouteWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();

  !isAuth && navigate("/");
  return <>{children}</>;
};
