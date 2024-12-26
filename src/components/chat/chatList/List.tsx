import styled from "styled-components";
import { ListType } from "../../../type";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background-color: var(--gray-1);
  border-radius: 10px;
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: gray;
    margin-right: 10px;
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .name {
      font-size: var(--normal-size);
      color: var(--sub-color-b);
      font-weight: 900;
    }
    .text {
      font-size: var(--medium-size);
      color: var(--gray-3);
    }
  }
`;

const List = ({name, text}:ListType) => {
  return (
    <Container>
      <div className="profile"></div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="text">{text}</div>
      </div>
    </Container>
  );
};

export default List;
