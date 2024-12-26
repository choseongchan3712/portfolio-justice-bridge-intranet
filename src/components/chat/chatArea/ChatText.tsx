import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .text {
    padding: 7px 10px;
    border-radius: 10px;
    background-color: var(--main-color);
    color: var(--sub-color-wh);
    font-size: var(--normal-size);
  }
`;

interface ChatTextType {
  text:string;
}

const ChatText = ({text}: ChatTextType) => {
  return (
    <Container>
      <div className="text">{text}</div>
    </Container>
  );
};

export default ChatText;
