import { useState } from "react";
import { IsCalOpenContext } from "../context/IsCalOpenContext";

interface IsCalOpenProviderType {
  children: React.ReactNode;
}

export const IsCalOpenProvider = ({ children }: IsCalOpenProviderType) => {
  const [isCalOpen, setIsCalOpen] = useState<boolean>(false);

  return (
    <IsCalOpenContext.Provider value={{ isCalOpen, setIsCalOpen }}>
      {children}
    </IsCalOpenContext.Provider>
  );
};
