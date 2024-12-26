import styled from "styled-components";
import ListWrap from "./ListWrap";
import DetailWrap from "./DetailWrap";

const Container = styled.div`
  width: 100%;
  height: calc(
    100vh -
      (var(--header-height) + var(--wraper-padding) + var(--wraper-padding))
  );
  border-radius: 20px;
  background-color: var(--sub-color-wh);
  display: flex;
  justify-content: space-between;
`;

const NoticeWrap = () => {
  return (
    <Container>
      <ListWrap />
      <DetailWrap />
    </Container>
  );
};

export default NoticeWrap;
