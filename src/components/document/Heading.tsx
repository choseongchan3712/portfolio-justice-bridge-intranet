import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
font-size: 25px;
font-weight: 700;
margin-top: 10px;
margin-bottom: 30px;
font-style: italic;
`;

interface Headingtype {
  children: ReactNode;
}

const Heading = ({children}:Headingtype):JSX.Element=>{
  return <Container>{children}</Container>;
};

export default Heading;