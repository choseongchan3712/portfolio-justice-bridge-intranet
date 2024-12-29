import styled from "styled-components";
import { LawContainerType } from "../../type";
import { useContext, useEffect, useRef } from "react";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { LawContext } from "../global/context/LawContext";

const Container = styled.div`
  padding: 20px;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--sub-color-wh);
  font-size: var(--medium-size);
  border-radius: 20px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  svg {
    font-size: var(--heading-size);
  }
  &:hover {
    box-shadow: 5px 5px 10px var(--gray-2);
  }
`;

const LawContainer = ({ color, children, areaName }: LawContainerType) => {
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;
  const {
    setIsPublic1Open,
    setIsPublic2Open,
    setIsPublic3Open,
    setIsPublic4Open,
    setIsCriminal1Open,
    setIsCriminal2Open,
    setIsCriminal3Open,
    setIsCriminal4Open,
    setIsCivil1Open,
    setIsCivil2Open,
    setIsCivil3Open,
    setIsCivil4Open,
    setIsCommercial1Open,
    setIsCommercial2Open,
    setIsCommercial3Open,
    setIsCommercial4Open,
    setIsAdministrative1Open,
    setIsAdministrative2Open,
    setIsAdministrative3Open,
    setIsAdministrative4Open,
    setIsProcedural1Open,
    setIsProcedural2Open,
    setIsProcedural3Open,
    setIsProcedural4Open,
  } = useContext(LawContext)!;
  const lawRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = () => {
    setIsOpen(true);

    // 모든 state를 false로 리셋
    setIsPublic1Open(false);
    setIsPublic2Open(false);
    setIsPublic3Open(false);
    setIsPublic4Open(false);
    setIsCriminal1Open(false);
    setIsCriminal2Open(false);
    setIsCriminal3Open(false);
    setIsCriminal4Open(false);
    setIsCivil1Open(false);
    setIsCivil2Open(false);
    setIsCivil3Open(false);
    setIsCivil4Open(false);
    setIsCommercial1Open(false);
    setIsCommercial2Open(false);
    setIsCommercial3Open(false);
    setIsCommercial4Open(false);
    setIsAdministrative1Open(false);
    setIsAdministrative2Open(false);
    setIsAdministrative3Open(false);
    setIsAdministrative4Open(false);
    setIsProcedural1Open(false);
    setIsProcedural2Open(false);
    setIsProcedural3Open(false);
    setIsProcedural4Open(false);

    const whatLaw: string = lawRef?.current?.querySelector("div")?.textContent!;
    if (whatLaw === "헌법") {
      setIsPublic1Open(true);
    } else if (whatLaw === "국가공무원법") {
      setIsPublic2Open(true);
    } else if (whatLaw === "지방공무원법") {
      setIsPublic3Open(true);
    } else if (whatLaw === "경찰관직무집행법") {
      setIsPublic4Open(true);
    } else if (whatLaw === "형법") {
      setIsCriminal1Open(true);
    } else if (whatLaw === "특정범죄가중처벌법") {
      setIsCriminal2Open(true);
    } else if (whatLaw === "성폭력범죄의 처벌 등에 관한 특례법") {
      setIsCriminal3Open(true);
    } else if (whatLaw === "아동·청소년의 성보호에 관한 법률") {
      setIsCriminal4Open(true);
    } else if (whatLaw === "민법") {
      setIsCivil1Open(true);
    } else if (whatLaw === "가족관계의 등록 등에 관한 법률") {
      setIsCivil2Open(true);
    } else if (whatLaw === "부동산등기법") {
      setIsCivil3Open(true);
    } else if (whatLaw === "상가건물임대차보호법") {
      setIsCivil4Open(true);
    } else if (whatLaw === "상법") {
      setIsCommercial1Open(true);
    } else if (whatLaw === "어음법") {
      setIsCommercial2Open(true);
    } else if (whatLaw === "전자상거래 등에서의 소비자보호에 관한 법률") {
      setIsCommercial3Open(true);
    } else if (whatLaw === "공정거래법") {
      setIsCommercial4Open(true);
    } else if (whatLaw === "행정기본법") {
      setIsAdministrative1Open(true);
    } else if (whatLaw === "행정절차법") {
      setIsAdministrative2Open(true);
    } else if (whatLaw === "토지보상법") {
      setIsAdministrative3Open(true);
    } else if (whatLaw === "공공기관의 정보공개에 관한 법률") {
      setIsAdministrative4Open(true);
    } else if (whatLaw === "민사소송법") {
      setIsProcedural1Open(true);
    } else if (whatLaw === "형사소송법") {
      setIsProcedural2Open(true);
    } else if (whatLaw === "행정소송법") {
      setIsProcedural3Open(true);
    } else if (whatLaw === "행정심판법") {
      setIsProcedural4Open(true);
    }
  };

  useEffect(() => {
    if (isOpen === false) {
      setIsPublic1Open(false);
      setIsPublic2Open(false);
      setIsPublic3Open(false);
      setIsPublic4Open(false);
      setIsCriminal1Open(false);
      setIsCriminal2Open(false);
      setIsCriminal3Open(false);
      setIsCriminal4Open(false);
      setIsCivil1Open(false);
      setIsCivil2Open(false);
      setIsCivil3Open(false);
      setIsCivil4Open(false);
      setIsCommercial1Open(false);
      setIsCommercial2Open(false);
      setIsCommercial3Open(false);
      setIsCommercial4Open(false);
      setIsAdministrative1Open(false);
      setIsAdministrative2Open(false);
      setIsAdministrative3Open(false);
      setIsAdministrative4Open(false);
      setIsProcedural1Open(false);
      setIsProcedural2Open(false);
      setIsProcedural3Open(false);
      setIsProcedural4Open(false);
    }
  }, [isOpen]);

  return (
    <Container
      style={{ backgroundColor: color, gridArea: areaName }}
      onClick={clickHandler}
      ref={lawRef}
    >
      {children}
    </Container>
  );
};

export default LawContainer;
