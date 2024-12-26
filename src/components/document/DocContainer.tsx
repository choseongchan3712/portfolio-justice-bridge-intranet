import styled from "styled-components";
import { DocContainerType } from "../../type";
import { useContext, useEffect, useRef } from "react";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { DocContext } from "../global/context/DocContext";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  padding: 0 25px;
  height: 110px;
  .detail_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: var(--title-size);
      font-weight: 900;
      color: var(--sub-color-b);
    }
    .write_button {
      width: 70px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--main-color);
      border-radius: 35px;
      color: var(--sub-color-wh);
      font-size: var(--medium-size);
      font-weight: 900;
      cursor: pointer;
      transition: 0.25s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const DocContainer = ({ areaName, title }: DocContainerType) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;
  const {
    isDayReOpen,
    setIsDayReOpen,
    isWorkReOpen,
    setIsWorkReOpen,
    isWeekReOpen,
    setIsWeekReOpen,
    isMonthReOpen,
    setIsMonthReOpen,
    isCivilComplaintOpen,
    setIsCivilComplaintOpen,
    isAgreementOpen,
    setIsAgreementOpen,
    isPlaintOpen,
    setIsPlaintOpen,
    isWithdrawOpen,
    setIsWithdrawOpen,
    isAdminComplaintOpen,
    setIsAdminComplaintOpen,
    isClaimOpen,
    setIsClaimOpen,
    isIOUOpen,
    setIsIOUOpen,
    isWaiverOpen,
    setIsWaiverOpen,
  } = useContext(DocContext)!;

  const clickHandler = () => {
    setIsOpen(true);
    const title: string = `${
      buttonRef?.current?.parentNode?.querySelector(".title")?.textContent
    }`;

    if (title === "업무보고") {
      setIsWorkReOpen(true);
    } else if (title === "일간보고") {
      setIsDayReOpen(true);
    } else if (title === "주간간보고") {
      setIsWeekReOpen(true);
    } else if (title === "월간보고") {
      setIsMonthReOpen(true);
    } else if (title === "민사소장") {
      setIsCivilComplaintOpen(true);
    } else if (title === "관할합의서") {
      setIsAgreementOpen(true);
    } else if (title === "고소장") {
      setIsPlaintOpen(true);
    } else if (title === "고소취하서") {
      setIsWithdrawOpen(true);
    } else if (title === "행정소장") {
      setIsAdminComplaintOpen(true);
    } else if (title === "행정심판 청구") {
      setIsClaimOpen(true);
    } else if (title === "금전차용증서") {
      setIsIOUOpen(true);
    } else if (title === "포기각서") {
      setIsWaiverOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen === false) {
      setIsWorkReOpen(false);
      setIsDayReOpen(false);
      setIsWeekReOpen(false);
      setIsMonthReOpen(false);
      setIsCivilComplaintOpen(false);
      setIsAgreementOpen(false);
      setIsPlaintOpen(false);
      setIsWithdrawOpen(false);
      setIsAdminComplaintOpen(false);
      setIsClaimOpen(false);
      setIsIOUOpen(false);
      setIsWaiverOpen(false);
    }
  }, [isOpen]);

  return (
    <Container style={{ gridArea: areaName }} className={areaName}>
      <div className="detail_wrap">
        <div className="title">{title}</div>
        <div className="write_button" onClick={clickHandler} ref={buttonRef}>
          작성하기
        </div>
      </div>
    </Container>
  );
};

export default DocContainer;
