import { createContext } from "react";

interface NoticeContextType {
  isCompOpen: boolean;
  setIsCompOpen: (value: boolean) => void;
  compDetail: any;
  setCompDetail: (value: any) => void;
  isGroupOpen: boolean;
  setIsGroupOpen: (value: boolean) => void;
  groupDetail: any;
  setGroupDetail: (value: any) => void;
  isTeamOpen: boolean;
  setIsTeamOpen: (value: boolean) => void;
  teamDetail: any;
  setTeamDetail: (value: any) => void;
  isWriteOpen: boolean;
  setIsWriteOpen: (value: boolean) => void;
}

export const NoticeContext = createContext<NoticeContextType | null>(null);
