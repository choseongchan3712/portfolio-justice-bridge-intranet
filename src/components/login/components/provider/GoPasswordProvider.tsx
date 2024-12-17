import { useState } from "react";
import { GoPasswordContxt } from "../context/GoPasswordContext";

interface GoPasswordProviderType {
  children: React.ReactNode;
}

export const GoPasswordProvider = ({children}:GoPasswordProviderType) => {
  const [goPassword, setGoPassword] = useState<boolean>(false);
  return <GoPasswordContxt.Provider value={{goPassword, setGoPassword}}>{children}</GoPasswordContxt.Provider>;
};