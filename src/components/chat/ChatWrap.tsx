import styled from "styled-components";
import ChatListWrap from "./chatList/ChatListWrap";
import ChatArea from "./chatArea/ChatArea";
import ProfileArea from "./profileArea/ProfileArea";

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
  return (
    <Container>
      <ChatListWrap />
      <ChatArea />
      <ProfileArea />
    </Container>
  );
};

export default ChatWrap;
