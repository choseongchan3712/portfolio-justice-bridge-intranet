import { createContext } from "react";

interface ChattingContextType {
  chatting: any;
  setChatting: (data:any) => void;
}

export const ChattingContext = createContext<ChattingContextType|null>(null);