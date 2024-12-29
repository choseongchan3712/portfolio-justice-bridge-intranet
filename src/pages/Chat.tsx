import ChatWrap from "../components/chat/ChatWrap";
import Title from "../components/global/Title";
import Wraper from "../components/global/Wraper";

const Chat = () => {
  return (
    <>
    <Title title="채팅"/>
    <Wraper>
      <ChatWrap></ChatWrap>
    </Wraper>
    </>
  );
};

export default Chat;