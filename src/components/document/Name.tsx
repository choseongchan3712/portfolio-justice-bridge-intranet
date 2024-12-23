import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 900;
`;

interface NameType {
  children: ReactNode;
}

const Name = ({children}: NameType):JSX.Element =>{
  return <Container>{children}</Container>;
};

export default Name;