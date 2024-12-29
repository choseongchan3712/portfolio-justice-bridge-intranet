import styled from "styled-components";
import Three from "../../Three";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: calc(var(--header-height) + var(--wraper-padding))
    var(--wraper-padding) 
    calc(var(--wraper-padding) + 100px)
    calc(var(--nav-width) + var(--wraper-padding));
  background-color: var(--gray-1);

  @media screen and (max-width: 1200px) {
    padding: calc(var(--header-height) + var(--wraper-padding))
      var(--wraper-padding) 
      calc(var(--wraper-padding) + 100px)
      calc(var(--nav-width) + 20px);
  }
`;

interface WraperType {
  children: React.ReactNode;
}

const Wraper = ({ children }: WraperType) => {
  const { themeMode } = useContext(ThemeContext)!;
  return (
    <Container>
      {themeMode === "edge" || "dreamy" ? <Three /> : null}
      {children}
    </Container>
  );
};

export default Wraper;
