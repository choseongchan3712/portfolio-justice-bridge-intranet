import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-size: var(--medium-size);
  color: var(--main-color);
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;

interface MoveButtonType {
  children: React.ReactNode;
  clickHandler: ()=>void;
}

const MoveButton = ({ children, clickHandler }: MoveButtonType) => {
  return <Container onClick={clickHandler}>{children}</Container>;
};

export default MoveButton;
