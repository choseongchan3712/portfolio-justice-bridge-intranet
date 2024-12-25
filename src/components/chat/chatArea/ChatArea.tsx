import styled from "styled-components";
import TitleWrap from "../TitleWrap";

const Container = styled.div`
  width: 55%;
  height: 100%;
  overflow-y: scroll;
  border-right: 1px solid var(--gray-2);
  padding: 0 20px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const ChatArea = () => {
  return (
    <Container>
      <TitleWrap>
        <div className="profile"></div>
        <div className="name">김도윤</div>
      </TitleWrap>
    </Container>
  );
};

export default ChatArea;
