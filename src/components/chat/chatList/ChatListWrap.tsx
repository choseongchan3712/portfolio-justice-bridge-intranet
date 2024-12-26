import styled from "styled-components";
import TitleWrap from "../TitleWrap";
import { ChattingContext } from "../context/ChattingContext";
import { useContext} from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import List from "./List";

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
  const { chatting } = useContext(ChattingContext)!;

  return (
    <Container>
      <TitleWrap>
        <div className="list">채팅 리스트</div>
      </TitleWrap>
      {chatting ? (
        <List name={chatting.name} text={chatting.text[text.length - 1]} />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ChatListWrap;
