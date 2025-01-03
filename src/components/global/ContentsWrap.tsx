import styled from "styled-components";
import { ContentsWrapType } from "../../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Container = styled.div`
  padding: 0 25px;
  background-color: var(--sub-color-wh);
  border-radius: 20px;
  height: auto;
  .title_wrap {
    width: 100%;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid var(--gray-1);
    .title {
      color: var(--sub-color-b);
      font-size: var(--title-size);
      font-weight: 900;
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
  const { themeMode } = useContext(ThemeContext)!;
  return (
    <Container
      className={className}
      style={{
        gridArea: className,
        backgroundColor:
          themeMode === "edge"
            ? "rgba(237, 253, 232, 0.7)"
            : themeMode === "dreamy"
            ? "rgba(241, 229, 245, 0.7)"
            : "var(--sub-color-wh)",
        backdropFilter: themeMode === "edge" ? "blur(5px)" : "unset",
      }}
    >
      <div className="title_wrap">
        <div className="title">{title}</div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div className="contents">{children}</div>
    </Container>
  );
};

export default ContentsWrap;
