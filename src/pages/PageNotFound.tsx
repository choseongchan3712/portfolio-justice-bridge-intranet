import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--sub-color-wh);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--big-size);
  color: var(--sub-color-b);
`;

const PageNotFound = () => {
  return <Container>404!</Container>;
};

export default PageNotFound;
