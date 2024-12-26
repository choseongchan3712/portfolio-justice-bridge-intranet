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

const CompContents = ({
  date,
  title,
  name,
  position,
  id,
  detail,
}: CompContentsType) => {
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;
  const { setIsCompOpen, setCompDetail } = useContext(NoticeContext)!;
  const compRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = () => {
    setIsOpen(true);
    setIsCompOpen(true);
    setCompDetail({
      date: compRef.current?.querySelector(".date")?.textContent,
      title: compRef.current?.querySelector(".title")?.textContent,
      name: compRef.current?.querySelector(".name")?.textContent,
      position: compRef.current?.querySelector(".position")?.textContent,
      detail: compRef.current?.querySelector(".detail")?.textContent,
    });
  };

  useEffect(() => {
    if (isOpen === false) {
      setIsCompOpen(false);
    }
  }, [isOpen]);

  return (
    <Container className={id} onClick={clickHandler} ref={compRef}>
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

export default CompContents;
