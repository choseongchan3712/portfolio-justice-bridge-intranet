import styled from "styled-components";

const Container = styled.button`
all: unset;
box-sizing: border-box;
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color: var(--sub-color-wh);
border-radius: 10px;
background-color: var(--main-color);
font-size: var(--title-size);
font-weight: 900;
transition: 0.25s;
&:hover {
  opacity: 0.8;
}
`;

interface SubmitButtonType {
  children: React.ReactNode;
}

const SubmitButton = ({children}:SubmitButtonType) => {
  return <Container>{children}</Container>;
};

export default SubmitButton;