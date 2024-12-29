import styled from "styled-components";

const Container = styled.div`
padding: 15px;
border-radius: 20px;
background-color: var(--sub-color-wh);
grid-area: todo;
min-height: 400px;
`;

interface CalenderWrapType {
  children: React.ReactNode;
}

const CalenderWrap = ({children}:CalenderWrapType) => {
  return <Container>{children}</Container>;
};

export default CalenderWrap;