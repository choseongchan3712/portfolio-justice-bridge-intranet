import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { PopUpContentsType } from "../../type";
import { IsOpenContext } from "./context/IsOpenContext";
import { IsCalOpenContext } from "./context/IsCalOpenContext";
import CalculateContents from "./subEffect/CalculateContents";
import { DocContext } from "./context/DocContext";
import CivilLitigationComplaint from "../document/docs/CivilLitigationComplaint";
import Agreement from "../document/docs/Agreement";
import Plaint from "../document/docs/Plaint";
import Withdraw from "../document/docs/Withdraw";
import AdminComplaint from "../document/docs/AdminComplaint";
import Claim from "../document/docs/Claim";
import IOU from "../document/docs/IOU";
import Waiver from "../document/docs/Waiver";
import { LawContext } from "./context/LawContext";
import LawWrap from "../law/LawWrap";
import { NoticeContext } from "../notice/context/NoticeContext";
import CompDetail from "../notice/CompDetail";
import NoticeWrite from "../notice/NoticeWrite";
import GroupDetail from "../notice/GroupDetail";
import TeamDetail from "../notice/TeamDetail";

const Container = styled.div`
  position: fixed;
  z-index: -990;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, var(--gray-3) 20%, var(--op-gray-2) 100%);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: 0.25s ease-in-out;
  .contents_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 30px 20px 20px;
    position: absolute;
    z-index: 991;
    width: 70%;
    height: 70%;
    background-color: var(--sub-color-wh);
    border-radius: 20px;
    transform: scale(0);
    transition: 0.25s ease-in-out;
    transform-origin: center;
    overflow: hidden;
    .x_mark {
      position: absolute;
      z-index: 992;
      cursor: pointer;
      right: 10px;
      top: 10px;
      color: var(--gray-3);
      font-size: var(--top-size);
    }
  }
`;

const PopUpContents = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentsRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;
  const { isCalOpen } = useContext(IsCalOpenContext)!;
  const {
    isWorkReOpen,
    isDayReOpen,
    isWeekReOpen,
    isMonthReOpen,
    isCivilComplaintOpen,
    isAgreementOpen,
    isPlaintOpen,
    isWithdrawOpen,
    isAdminComplaintOpen,
    isClaimOpen,
    isIOUOpen,
    isWaiverOpen,
  } = useContext(DocContext)!;

  const {
    isPublic1Open,
    isPublic2Open,
    isPublic3Open,
    isPublic4Open,
    isCriminal1Open,
    isCriminal2Open,
    isCriminal3Open,
    isCriminal4Open,
    isCivil1Open,
    isCivil2Open,
    isCivil3Open,
    isCivil4Open,
    isCommercial1Open,
    isCommercial2Open,
    isCommercial3Open,
    isCommercial4Open,
    isAdministrative1Open,
    isAdministrative2Open,
    isAdministrative3Open,
    isAdministrative4Open,
    isProcedural1Open,
    isProcedural2Open,
    isProcedural3Open,
    isProcedural4Open,
  } = useContext(LawContext)!;

  const { isCompOpen, isGroupOpen, isTeamOpen, isWriteOpen } =
    useContext(NoticeContext)!;

  const clickHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (contentsRef.current && containerRef.current) {
      if (isOpen === true) {
        contentsRef.current.style.transform = "scale(1)";
        containerRef.current.style.opacity = "1";
        containerRef.current.style.zIndex = "990";
      } else {
        contentsRef.current.style.transform = "scale(0)";
        containerRef.current.style.opacity = "0";
        containerRef.current.style.zIndex = "-990";
      }
    }
  }, [isOpen]);

  return (
    <Container ref={containerRef}>
      <div className="contents_wrap" ref={contentsRef}>
        <FontAwesomeIcon
          icon={faXmark}
          className="x_mark"
          onClick={clickHandler}
        />
        {isCalOpen ? (
          <CalculateContents></CalculateContents>
        ) : isCivilComplaintOpen ? (
          <CivilLitigationComplaint />
        ) : isAgreementOpen ? (
          <Agreement />
        ) : isPlaintOpen ? (
          <Plaint />
        ) : isWithdrawOpen ? (
          <Withdraw />
        ) : isAdminComplaintOpen ? (
          <AdminComplaint />
        ) : isClaimOpen ? (
          <Claim />
        ) : isIOUOpen ? (
          <IOU />
        ) : isWaiverOpen ? (
          <Waiver />
        ) : isPublic1Open ? (
          <LawWrap id="001444" />
        ) : isPublic2Open ? (
          <LawWrap id="001719" />
        ) : isPublic3Open ? (
          <LawWrap id="001653" />
        ) : isPublic4Open ? (
          <LawWrap id="000985" />
        ) : isCriminal1Open ? (
          <LawWrap id="001692" />
        ) : isCriminal2Open ? (
          <LawWrap id="001133" />
        ) : isCriminal3Open ? (
          <LawWrap id="011187" />
        ) : isCriminal4Open ? (
          <LawWrap id="002044" />
        ) : isCivil1Open ? (
          <LawWrap id="001706" />
        ) : isCivil2Open ? (
          <LawWrap id="010569" />
        ) : isCivil3Open ? (
          <LawWrap id="001697" />
        ) : isCivil4Open ? (
          <LawWrap id="009276" />
        ) : isCommercial1Open ? (
          <LawWrap id="001702" />
        ) : isCommercial2Open ? (
          <LawWrap id="001230" />
        ) : isCommercial3Open ? (
          <LawWrap id="009318" />
        ) : isCommercial4Open ? (
          <LawWrap id="001591" />
        ) : isAdministrative1Open ? (
          <LawWrap id="014041" />
        ) : isAdministrative2Open ? (
          <LawWrap id="001362" />
        ) : isAdministrative3Open ? (
          <LawWrap id="009295" />
        ) : isAdministrative4Open ? (
          <LawWrap id="001357" />
        ) : isProcedural1Open ? (
          <LawWrap id="001700" />
        ) : isProcedural2Open ? (
          <LawWrap id="001671" />
        ) : isProcedural3Open ? (
          <LawWrap id="001206" />
        ) : isProcedural4Open ? (
          <LawWrap id="001218" />
        ) : isCompOpen ? (
          <CompDetail />
        ) : isTeamOpen ? (
          <TeamDetail />
        ) : isGroupOpen ? (
          <GroupDetail />
        ) : isWriteOpen ? (
          <NoticeWrite />
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default PopUpContents;
