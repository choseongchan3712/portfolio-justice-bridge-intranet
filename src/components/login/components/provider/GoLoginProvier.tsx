import { useState } from "react";
import { GoLoginContext } from "../context/GoLoginContext";

interface GoLoginProviderType {
  children: React.ReactNode;
}

export const GoLoginProvider = ({children}:GoLoginProviderType) => {
  const [goLogin, setGoLogin] = useState<boolean>(true);
  return <GoLoginContext.Provider value={{goLogin, setGoLogin}}>{children}</GoLoginContext.Provider>;
};