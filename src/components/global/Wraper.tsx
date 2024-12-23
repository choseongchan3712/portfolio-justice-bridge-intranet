import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: calc(var(--header-height) + var(--wraper-padding)) var(--wraper-padding) var(--wraper-padding) calc(var(--nav-width) + var(--wraper-padding));
  background-color: var(--gray-1);
`;

interface WraperType {
  children: React.ReactNode;
}

const Wraper = ({children}:WraperType) => {
  return <Container>{children}</Container>;
};

export default Wraper;
