import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
margin-bottom: 20px;
width: 50%;
border: 1px solid var(--gray-2);
border-radius: 10px;
padding: 20px 10px 0 10px;
`;

interface HeadingWrapType {
  children: ReactNode;
}

const HeadingWrap = ({children}: HeadingWrapType):JSX.Element =>{
  return <Container>{children}</Container>;
};

export default HeadingWrap;