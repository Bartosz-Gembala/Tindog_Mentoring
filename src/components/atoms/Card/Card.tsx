import { FC, ReactNode } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-1/4 h-1/2 bg-white">{children}</div>;
};
