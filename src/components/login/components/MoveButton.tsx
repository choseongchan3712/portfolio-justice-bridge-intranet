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
`;

interface MoveButtonType {
  children: React.ReactNode;
}

const MoveButton = ({children}:MoveButtonType) => {
  return <Container>{children}</Container>;
};

export default MoveButton;