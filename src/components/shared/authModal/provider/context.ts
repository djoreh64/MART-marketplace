"use client";

import { createContext } from "react";

export type AuthType = "login" | "register" | "registerCompany";

export interface IContext {
  authType: AuthType;
  setAuthType: (authType: AuthType) => void;
}

export const AuthContext = createContext<IContext>({
  authType: "login",
  setAuthType: () => {},
});


