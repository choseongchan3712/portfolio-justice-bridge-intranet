import { useState } from "react";
import { NoticeContext } from "../context/NoticeContext";

interface NoticeProviderType {
  children: React.ReactNode;
}

export const NoticeProvider = ({ children }: NoticeProviderType) => {
  const [isCompOpen, setIsCompOpen] = useState<boolean>(false);
  const [compDetail, setCompDetail] = useState<any>();
  const [isGroupOpen, setIsGroupOpen] = useState<boolean>(false);
  const [groupDetail, setGroupDetail] = useState<any>();
  const [isTeamOpen, setIsTeamOpen] = useState<boolean>(false);
  const [teamDetail, setTeamDetail] = useState<any>();
  const [isWriteOpen, setIsWriteOpen] =useState<boolean>(false);
  return (
    <NoticeContext.Provider
      value={{
        isCompOpen,
        setIsCompOpen,
        compDetail,
        setCompDetail,
        isGroupOpen,
        setIsGroupOpen,
        groupDetail,
        setGroupDetail,
        isTeamOpen,
        setIsTeamOpen,
        teamDetail,
        setTeamDetail,
        isWriteOpen,
        setIsWriteOpen,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
