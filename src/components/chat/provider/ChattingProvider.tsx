import { useState } from "react";
import { ChattingContext } from "../context/ChattingContext";

interface ChattingProviderType {
  children: React.ReactNode;
}

export const ChattingProvider = ({ children }: ChattingProviderType) => {
  const [chatting, setChatting] = useState<any>();
  return (
    <ChattingContext.Provider value={{ chatting, setChatting }}>
      {children}
    </ChattingContext.Provider>
  );
};
