import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
font-size: var(--top-size);
font-weight: 900;
margin-top: 10px;
margin-bottom: 30px;
color: var(--sub-color-b);
`;

interface Headingtype {
  children: ReactNode;
}

const Heading = ({children}:Headingtype):JSX.Element=>{
  return <Container>{children}</Container>;
};

export default Heading;