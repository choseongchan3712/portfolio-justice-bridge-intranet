import styled from "styled-components";
import { MemberType } from "../../../type";
import { useContext, useRef } from "react";
import { ChattingContext } from "../context/ChattingContext";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 10px;
  .member_wrap {
    float: right;
    width: 90%;
    height: 30px;
    padding: 0 20px;
    font-size: var(--normal-size);
    background-color: var(--gray-1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    .rank {
      width: 20%;
      color: var(--gray-3);
    }
    .name {
      width: 30%;
      color: var(--sub-color-b);
      font-weight: 900;
    }
    .position {
      width: 20%;
      color: var(--main-color);
      font-size: var(--medium-size);
      font-weight: 900;
    }
  }
`;

const Member = ({ rank, name, position }: MemberType) => {
  const memberRef = useRef<HTMLDivElement | null>(null);
  const { setChatting } = useContext(ChattingContext)!;

  const clickHandler = () => {
    setChatting({
      name: memberRef.current?.querySelector(".name")?.textContent,
      rank: memberRef.current?.querySelector('.rank')?.textContent,
      position: memberRef.current?.querySelector('.position')?.textContent,
      text: [],
    });
  };

  return (
    <Container>
      <div className="member_wrap" onClick={clickHandler} ref={memberRef}>
        <div className="rank">{rank}</div>
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>
    </Container>
  );
};

export default Member;
