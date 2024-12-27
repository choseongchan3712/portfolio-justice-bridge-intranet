import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../global/context/ThemeContext";

const Container = styled.div`
  width: 100%;
  height: calc(
    100vh -
      (var(--header-height) + var(--wraper-padding) + var(--wraper-padding))
  );
  border-radius: 20px;
  background-color: var(--sub-color-wh);
`;

const ManagementWrap = () => {
  const { themeMode } = useContext(ThemeContext)!;
  return (
    <Container
      style={{
        backgroundColor:
          themeMode === "edge"
            ? "rgba(237, 253, 232, 0.7)"
            : "var(--sub-color-wh)",
        backdropFilter: themeMode === "edge" ? "blur(5px)" : "unset",
      }}
    ></Container>
  );
};

export default ManagementWrap;
