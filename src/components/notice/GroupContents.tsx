import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { NoticeContext } from "./context/NoticeContext";
import { CompContentsType } from "../../type";

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

const GroupContents = ({
  date,
  title,
  name,
  position,
  id,
  detail,
}: CompContentsType) => {
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;
  const { setIsGroupOpen, setGroupDetail } = useContext(NoticeContext)!;
  const groupRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = () => {
    setIsOpen(true);
    setIsGroupOpen(true);
    setGroupDetail({
      date: groupRef.current?.querySelector(".date")?.textContent,
      title: groupRef.current?.querySelector(".title")?.textContent,
      name: groupRef.current?.querySelector(".name")?.textContent,
      position: groupRef.current?.querySelector(".position")?.textContent,
      detail: groupRef.current?.querySelector(".detail")?.textContent,
    });
  };

  useEffect(() => {
    if (isOpen === false) {
      setIsGroupOpen(false);
    }
  }, [isOpen]);
  return (
    <Container className={id} onClick={clickHandler} ref={groupRef}>
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

export default GroupContents; 
