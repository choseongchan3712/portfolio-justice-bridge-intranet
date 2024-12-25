import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 60px;
font-size: var(--title-size);
font-weight: 900;
border-bottom: 1px solid var(--gray-2);
display: flex;
align-items: center;
.list {
  color: var(--main-color);
}
.name {
  padding-left: 20px;
  color: var(--sub-color-b);
}
.group {
  color: var(--gray-3);
}
.profile {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: gray;
}
`;

interface TitleWrapType {
  children: React.ReactNode;
}

const TitleWrap = ({children}: TitleWrapType) => {
  return <Container>{children}</Container>;
}

export default TitleWrap;