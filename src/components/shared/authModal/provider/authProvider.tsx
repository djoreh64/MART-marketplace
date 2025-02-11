"use client";

import { createContext, FC, ReactNode, useState } from "react";
import { AuthType, IContext } from "./context";

export const AuthContext = createContext<IContext>({
  authType: "login",
  setAuthType: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authType, setAuthType] = useState<AuthType>("login");

  return (
    <AuthContext.Provider value={{ authType, setAuthType }}>
      {children}
    </AuthContext.Provider>
  );
};
