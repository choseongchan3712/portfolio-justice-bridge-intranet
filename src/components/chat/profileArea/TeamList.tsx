import styled from "styled-components";
import { TeamListType } from "../../../type";
import { useRef, useState } from "react";

const Container = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 100%;
  height: fit-content;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .team {
    float: right;
    width: 90%;
    height: 30px;
    padding: 0 20px;
    font-size: var(--normal-size);
    color: var(--sub-color-wh);
    background-color: var(--gray-3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .team_click {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      background-color: var(--gray-2);
      border-radius: 5px;
      font-weight: 900;
      color: var(--sub-color-b);
    }
  }
  .team_wrap {
    width: 100%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
  }
`;

const TeamList = ({ children, team }: TeamListType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Container isOpen = {isOpen}>
      <div className="team" onClick={clickHandler}>
        <div className="team_click">+</div>
        {team}
      </div>
      <div className="team_wrap">{children}</div>
    </Container>
  );
};

export default TeamList;
