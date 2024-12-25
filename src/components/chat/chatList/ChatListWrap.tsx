import styled from "styled-components";
import TitleWrap from "../TitleWrap";

const Container = styled.div`
  height: 100%;
  width: 20%;
  overflow-y: scroll;
  border-right: 1px solid var(--gray-2);
  padding: 0 20px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const ChatListWrap = () => {
  return (
    <Container>
      <TitleWrap>
        <div className="list">채팅 리스트</div>
      </TitleWrap>
    </Container>
  );
};

export default ChatListWrap;
