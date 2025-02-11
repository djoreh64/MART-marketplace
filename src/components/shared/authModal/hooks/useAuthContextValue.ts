import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

export const useAuthContextValue = () => {
  const context = useContext(AuthContext);
  return context;
};
