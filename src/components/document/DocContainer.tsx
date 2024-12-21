import styled from "styled-components";
import { DocContainerType } from "../../type";

const Container = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--gray-1);
border: 1px solid var(--gray-2);
border-radius: 20px;
padding: 0 25px;
height: 110px;
.detail_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: var(--top-size);
    font-weight: 900;
    color: var(--sub-color-b);
  }
  .write_button {
    width: 70px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color);
    border-radius: 35px;
    color: var(--sub-color-wh);
    font-size: var(--medium-size);
    font-weight: 900;
    cursor: pointer;
    transition: 0.25s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
}
`;

const DocContainer = ({areaName, title}: DocContainerType) => {
  return <Container style={{gridArea: areaName}} className={areaName}>
    <div className="detail_wrap">
      <div className="title">{title}</div>
      <div className="write_button">작성하기</div>
    </div>
  </Container>;
};

export default DocContainer;