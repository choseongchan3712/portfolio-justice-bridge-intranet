import { useState } from "react";
import { LawContext } from "../context/LawContext";

interface LawProviderType {
  children: React.ReactNode;
}

export const LawProvider = ({ children }: LawProviderType) => {
  const [isPublic1Open, setIsPublic1Open] = useState<boolean>(false);
  const [isPublic2Open, setIsPublic2Open] = useState<boolean>(false);
  const [isPublic3Open, setIsPublic3Open] = useState<boolean>(false);
  const [isPublic4Open, setIsPublic4Open] = useState<boolean>(false);
  const [isCriminal1Open, setIsCriminal1Open] = useState<boolean>(false);
  const [isCriminal2Open, setIsCriminal2Open] = useState<boolean>(false);
  const [isCriminal3Open, setIsCriminal3Open] = useState<boolean>(false);
  const [isCriminal4Open, setIsCriminal4Open] = useState<boolean>(false);
  const [isCivil1Open, setIsCivil1Open] = useState<boolean>(false);
  const [isCivil2Open, setIsCivil2Open] = useState<boolean>(false);
  const [isCivil3Open, setIsCivil3Open] = useState<boolean>(false);
  const [isCivil4Open, setIsCivil4Open] = useState<boolean>(false);
  const [isCommercial1Open, setIsCommercial1Open] = useState<boolean>(false);
  const [isCommercial2Open, setIsCommercial2Open] = useState<boolean>(false);
  const [isCommercial3Open, setIsCommercial3Open] = useState<boolean>(false);
  const [isCommercial4Open, setIsCommercial4Open] = useState<boolean>(false);
  const [isAdministrative1Open, setIsAdministrative1Open] =
    useState<boolean>(false);
  const [isAdministrative2Open, setIsAdministrative2Open] =
    useState<boolean>(false);
  const [isAdministrative3Open, setIsAdministrative3Open] =
    useState<boolean>(false);
  const [isAdministrative4Open, setIsAdministrative4Open] =
    useState<boolean>(false);
  const [isProcedural1Open, setIsProcedural1Open] = useState<boolean>(false);
  const [isProcedural2Open, setIsProcedural2Open] = useState<boolean>(false);
  const [isProcedural3Open, setIsProcedural3Open] = useState<boolean>(false);
  const [isProcedural4Open, setIsProcedural4Open] = useState<boolean>(false);

  return (
    <LawContext.Provider
      value={{
        isPublic1Open,
        setIsPublic1Open,
        isPublic2Open,
        setIsPublic2Open,
        isPublic3Open,
        setIsPublic3Open,
        isPublic4Open,
        setIsPublic4Open,
        isCriminal1Open,
        setIsCriminal1Open,
        isCriminal2Open,
        setIsCriminal2Open,
        isCriminal3Open,
        setIsCriminal3Open,
        isCriminal4Open,
        setIsCriminal4Open,
        isCivil1Open,
        setIsCivil1Open,
        isCivil2Open,
        setIsCivil2Open,
        isCivil3Open,
        setIsCivil3Open,
        isCivil4Open,
        setIsCivil4Open,
        isCommercial1Open,
        setIsCommercial1Open,
        isCommercial2Open,
        setIsCommercial2Open,
        isCommercial3Open,
        setIsCommercial3Open,
        isCommercial4Open,
        setIsCommercial4Open,
        isAdministrative1Open,
        setIsAdministrative1Open,
        isAdministrative2Open,
        setIsAdministrative2Open,
        isAdministrative3Open,
        setIsAdministrative3Open,
        isAdministrative4Open,
        setIsAdministrative4Open,
        isProcedural1Open,
        setIsProcedural1Open,
        isProcedural2Open,
        setIsProcedural2Open,
        isProcedural3Open,
        setIsProcedural3Open,
        isProcedural4Open,
        setIsProcedural4Open,
      }}
    >
      {children}
    </LawContext.Provider>
  );
};
