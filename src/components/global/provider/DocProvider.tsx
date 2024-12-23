import { useState } from "react";
import { DocContext } from "../context/DocContext";

interface DocProviderType {
  children: React.ReactNode;
}

export const DocProvider = ({ children }: DocProviderType) => {
  const [isDayReOpen, setIsDayReOpen] = useState<boolean>(false);
  const [isWorkReOpen, setIsWorkReOpen] = useState<boolean>(false);
  const [isWeekReOpen, setIsWeekReOpen] = useState<boolean>(false);
  const [isMonthReOpen, setIsMonthReOpen] = useState<boolean>(false);
  const [isCivilComplaintOpen, setIsCivilComplaintOpen] = useState<boolean>(false);
  const [isAgreementOpen, setIsAgreementOpen] = useState<boolean>(false);
  const [isPlaintOpen, setIsPlaintOpen] = useState<boolean>(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState<boolean>(false);
  const [isAdminComplaintOpen, setIsAdminComplaintOpen] = useState<boolean>(false);
  const [isClaimOpen, setIsClaimOpen] = useState<boolean>(false);
  const [isIOUOpen, setIsIOUOpen] = useState<boolean>(false);
  const [isWaiverOpen, setIsWaiverOpen] = useState<boolean>(false);
  return (
    <DocContext.Provider
      value={{ isDayReOpen, setIsDayReOpen, isWorkReOpen, setIsWorkReOpen, isWeekReOpen, setIsWeekReOpen, isMonthReOpen, setIsMonthReOpen, isCivilComplaintOpen, setIsCivilComplaintOpen, isAgreementOpen, setIsAgreementOpen, isPlaintOpen, setIsPlaintOpen, isWithdrawOpen, setIsWithdrawOpen, isAdminComplaintOpen, setIsAdminComplaintOpen, isClaimOpen, setIsClaimOpen, isIOUOpen, setIsIOUOpen, isWaiverOpen, setIsWaiverOpen }}
    >
      {children}
    </DocContext.Provider>
  );
};
