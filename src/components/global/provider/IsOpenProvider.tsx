import { useState } from "react";
import { IsOpenContext } from "../context/IsOpenContext";

interface IsOpenProviderType {
  children: React.ReactNode;
};

export const IsOpenProvider = ({children}:IsOpenProviderType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <IsOpenContext.Provider value={{isOpen, setIsOpen}}>{children}</IsOpenContext.Provider>
};