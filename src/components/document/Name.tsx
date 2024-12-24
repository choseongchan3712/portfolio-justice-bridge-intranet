import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-size: var(--heading-size);
  font-weight: 900;
  color: var(--sub-color-b);
`;

interface NameType {
  children: ReactNode;
}

const Name = ({children}: NameType):JSX.Element =>{
  return <Container>{children}</Container>;
};

export default Name;