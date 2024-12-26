import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(
    100vh -
      (var(--header-height) + var(--wraper-padding) + var(--wraper-padding))
  );
  border-radius: 20px;
  background-color: var(--sub-color-wh);
`;

const NoticeWrap = () => {
  return <Container></Container>;
};

export default NoticeWrap;
