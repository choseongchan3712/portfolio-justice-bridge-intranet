import styled from "styled-components";
import ListButton from "./ListButton";

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid var(--gray-2);
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--title-size);
    font-weight: 900;
    border-bottom: 1px solid var(--gray-2);
  }
  .contents_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ListWrap = () => {
  return (
    <Container>
      <div className="header">분류</div>
      <div className="contents_wrap">
        <ListButton title="회사 게시물" link=""/>
        <ListButton title="부서 게시물" link="group"/>
        <ListButton title="팀 게시물" link="team"/>
      </div>
    </Container>
  );
};

export default ListWrap;
