import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;
font-weight: 700;
margin-bottom: 20px;
`;

interface TitleType {
  children: ReactNode;
}

const Title = ({children}: TitleType):JSX.Element => {
  return <Container>{children}</Container>;
};

export default Title;