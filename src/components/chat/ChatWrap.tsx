import styled from "styled-components";
import ChatListWrap from "./chatList/ChatListWrap";
import ChatArea from "./chatArea/ChatArea";
import ProfileArea from "./profileArea/ProfileArea";
import { useContext } from "react";
import { ThemeContext } from "../global/context/ThemeContext";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(
    100vh -
      (var(--header-height) + var(--wraper-padding) + var(--wraper-padding))
  );
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--sub-color-wh);
  display: flex;
  justify-content: space-between;
`;

const ChatWrap = () => {
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
      <ChatListWrap />
      <ChatArea />
      <ProfileArea />
    </Container>
  );
};

export default ChatWrap;
