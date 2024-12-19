import styled from "styled-components";
import { ContentsWrapType } from "../../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 0 25px;
  background-color: var(--sub-color-wh);
  border-radius: 20px;
  .title_wrap {
    width: 100%;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-1);
    .title {
      font-size: var(--title-size);
      font-weight: 900;
      color: var(--sub-color-b);
    }
    svg {
      color: var(--gray-3);
      cursor: pointer;
    }
  }
  .contents {
    width: 100%;
  }
`;

const ContentsWrap = ({ className, title, children }: ContentsWrapType) => {
  return (
    <Container className={className} style={{gridArea: className,}}>
      <div className="title_wrap">
        <div className="title">{title}</div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div className="contents">{children}</div>
    </Container>
  );
};

export default ContentsWrap;
