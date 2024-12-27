import styled from "styled-components";
import ListWrap from "./ListWrap";
import DetailWrap from "./DetailWrap";
import { ThemeContext } from "../global/context/ThemeContext";
import { useContext } from "react";

const Container = styled.div`
  width: 100%;
  height: calc(
    100vh -
      (var(--header-height) + var(--wraper-padding) + var(--wraper-padding))
  );
  border-radius: 20px;
  background-color: var(--sub-color-wh);
  display: flex;
  justify-content: space-between;
`;

const NoticeWrap = () => {
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
    >
      <ListWrap />
      <DetailWrap />
    </Container>
  );
};

export default NoticeWrap;
