import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  .wrap {
    width: 100%;
    height: 100%;
    background-color: var(--gray-3);
    color: var(--sub-color-wh);
    display: flex;
    align-items: center;
    border-radius: 10px;
    .date {
      width: 20%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--gray-2);
    }
    .title {
      width: 60%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--gray-2);
    }
    .author {
      width: 20%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const NoticeEx = () => {
  return (
    <Container>
      <div className="wrap">
        <div className="date">등록날짜</div>
        <div className="title">제목</div>
        <div className="author">작성자</div>
      </div>
    </Container>
  );
};

export default NoticeEx;
