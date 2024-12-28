import styled from "styled-components";
import ThemeWrap from "./ThemeWrap";
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
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

const SettingWrap = () => {
  const { themeMode } = useContext(ThemeContext)!;
  return (
    <Container
      style={{
        backgroundColor:
          themeMode === "edge"
            ? "rgba(237, 253, 232, 0.7)"
            : themeMode === "dreamy"
            ? "rgba(241, 229, 245, 0.7)"
            : "var(--sub-color-wh)",
        backdropFilter: themeMode === "edge" ? "blur(5px)" : "unset",
      }}
    >
      <ThemeWrap text="일반" color="black" bgColor="#fafafa" />
      <ThemeWrap text="다크" color="white" bgColor="#333" />
      <ThemeWrap text="엣지" color="black" bgColor="#abffb2" />
      <ThemeWrap text="몽환" color="black" bgColor="#f2c5ff" />
    </Container>
  );
};

export default SettingWrap;
