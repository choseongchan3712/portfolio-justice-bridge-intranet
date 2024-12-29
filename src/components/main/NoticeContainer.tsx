import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { NoticeContainerType } from "../../type";

interface ContainerProps {
  areaName?: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 0 15px;
  background-color: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  grid-area: ${(props) => props.areaName};

  .title_wrap {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      color: var(--sub-color-b);
      font-size: var(--normal-size);
      font-weight: 900;
    }
  }

  .contents_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .detail {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      .text {
        font-size: var(--medium-size);
        color: var(--gray-3);
      }
      .percent {
        font-size: var(--medium-size);
        color: var(--sub-color-b);
      }
    }
    .bar {
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background-color: var(--gray-2);
      .per_bar {
        border-radius: 5px;
        height: 100%;
        width: 50%;
      }
    }
  }

  .view_wrap {
    width: 100%;
    padding: 10px 0;
    display: flex;
    svg {
      color: var(--gray-3);
      font-size: var(--medium-size);
    }
    .view_detail {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 5px;
      font-size: var(--medium-size);
      .watch {
        color: var(--sub-color-b);
      }
      .all {
        color: var(--gray-3);
      }
    }
  }

  &:hover {
    box-shadow: 5px 5px 10px var(--gray-1);
  }
`;

const NoticeContainer = ({
  barColor,
  title,
  areaName,
}: NoticeContainerType) => {
  return (
    <Container areaName={areaName}>
      <div className="title_wrap">
        <div className="title">{title}</div>
      </div>
      <div className="contents_wrap">
        <div className="detail">
          <div className="text">오늘의 공지</div>
          <div className="percent">50%</div>
        </div>
        <div className="bar">
          <div className="per_bar" style={{ backgroundColor: barColor }}></div>
        </div>
      </div>
      <div className="view_wrap">
        <FontAwesomeIcon icon={faEye} />
        <div className="view_detail">
          <span className="watch">1</span>
          <span className="all">/2</span>
        </div>
      </div>
    </Container>
  );
};

export default NoticeContainer;
