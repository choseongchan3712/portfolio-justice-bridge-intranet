import styled from "styled-components";
import { GroupListType } from "../../../type";
import { useState } from "react";

const Container = styled.div<{ isOpen: boolean }>`
  width: 100%;
  position: relative;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  .group {
    width: 100%;
    height: 30px;
    padding: 0 20px;
    font-size: var(--normal-size);
    color: var(--sub-color-wh);
    background-color: var(--gray-3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .click {
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
  .group_wrap {
    width: 100%;
    display: ${(props)=>(props.isOpen ? "flex" : "none")};
    flex-direction: column;
  }
`;

const GroupList = ({ children, group }: GroupListType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Container isOpen={isOpen}>
      <div className="group"  onClick={clickHandler}>
        <div className="click">
          +
        </div>
        {group}
      </div>
      <div className="group_wrap">{children}</div>
    </Container>
  );
};

export default GroupList;
