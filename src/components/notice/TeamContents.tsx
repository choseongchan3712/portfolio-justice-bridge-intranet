import styled from "styled-components";
import { CompContentsType } from "../../type";
import { useContext, useEffect, useRef } from "react";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { NoticeContext } from "./context/NoticeContext";

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  cursor: pointer;
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: var(--gray-1);
    color: var(--sub-color-b);
    border-radius: 10px;
    font-size: var(--normal-size);
    .date {
      width: 20%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--gray-3);
    }
    .title {
      width: 60%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--gray-3);
    }
    .author {
      width: 20%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .position {
        font-size: var(--medium-size);
        color: var(--main-color);
        padding-left: 10px;
      }
    }
  }
`;

const TeamContents = ({
  date,
  title,
  name,
  position,
  id,
  detail,
}: CompContentsType) => {
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;
  const { setIsTeamOpen, setTeamDetail } = useContext(NoticeContext)!;
  const teamRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = () => {
    setIsOpen(true);
    setIsTeamOpen(true);
    setTeamDetail({
      date: teamRef.current?.querySelector(".date")?.textContent,
      title: teamRef.current?.querySelector(".title")?.textContent,
      name: teamRef.current?.querySelector(".name")?.textContent,
      position: teamRef.current?.querySelector(".position")?.textContent,
      detail: teamRef.current?.querySelector(".detail")?.textContent,
    });
  };

  useEffect(() => {
    if (isOpen === false) {
      setIsTeamOpen(false);
    }
  }, [isOpen]);

  return (
    <Container className={id} onClick={clickHandler} ref={teamRef}>
      <div className="wrap">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="author">
          <div className="name">{name}</div>
          <div className="position">{position}</div>
        </div>
        <div className="detail" style={{ display: "none" }}>
          {detail}
        </div>
      </div>
    </Container>
  );
};

export default TeamContents;
