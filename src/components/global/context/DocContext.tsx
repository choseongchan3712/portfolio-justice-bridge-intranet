import { createContext } from "react";

interface DocContextType {

  isWorkReOpen: boolean;
  setIsWorkReOpen: (value: boolean)=> void;
  isDayReOpen: boolean;
  setIsDayReOpen: (value: boolean)=> void;
  isWeekReOpen: boolean;
  setIsWeekReOpen: (value: boolean)=> void;
  isMonthReOpen: boolean;
  setIsMonthReOpen: (value: boolean)=> void;
  isCivilComplaintOpen: boolean;
  setIsCivilComplaintOpen: (value: boolean)=> void;
  isAgreementOpen: boolean;
  setIsAgreementOpen: (value: boolean)=> void;
  isPlaintOpen: boolean;
  setIsPlaintOpen: (value: boolean)=> void;
  isWithdrawOpen: boolean;
  setIsWithdrawOpen: (value: boolean)=> void;
  isAdminComplaintOpen: boolean;
  setIsAdminComplaintOpen: (value: boolean)=> void;
  isClaimOpen: boolean;
  setIsClaimOpen: (value: boolean)=> void;
  isIOUOpen: boolean;
  setIsIOUOpen: (value: boolean)=> void;
  isWaiverOpen: boolean;
  setIsWaiverOpen: (value: boolean)=> void;
};

export const DocContext = createContext<DocContextType|null>(null);