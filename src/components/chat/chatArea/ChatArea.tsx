import styled from "styled-components";
import TitleWrap from "../TitleWrap";
import ChatInput from "./ChatInput";
import { useContext, useState } from "react";
import ChatText from "./ChatText";
import { ChattingContext } from "../context/ChattingContext";

const Container = styled.div`
  position: relative;
  width: 55%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid var(--gray-2);
  padding: 0 20px;
  .chatting {
    position: relative;
    width: 100%;
    height: calc(100% - 110px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

const ChatArea = () => {
  const [message, setMessage] = useState<any>();
  const { chatting } = useContext(ChattingContext)!;

  return (
    <Container>
      <TitleWrap>
        {chatting ? (
          <>
            <div className="profile"></div>
            <div className="name">{chatting.name}</div>
          </>
        ) : (
          <div className="name">채팅</div>
        )}
      </TitleWrap>
      <div className="chatting">
        {chatting ? (
          chatting.text.map((data: string, index: number) => (
            <ChatText text={data} key={index} />
          ))
        ) : (
          <></>
        )}
      </div>
      <ChatInput message={message} setMessage={setMessage} />
    </Container>
  );
};

export default ChatArea;
