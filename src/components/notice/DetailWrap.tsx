import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { NoticeContext } from "./context/NoticeContext";

const Container = styled.div`
  width: 80%;
  height: 100%;
  padding: 0 20px;
  .header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid var(--gray-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--sub-color-b);
    font-size: var(--title-size);
    font-weight: 900;
    .plus {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-3);
      border-radius: 10px;
      cursor: pointer;
      font-size: var(--normal-size);
      color: var(--sub-color-wh);
    }
  }
  .contents_wrap {
    width: 100%;
    height: calc(100% - 60px);
    padding-top: 10px;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

const DetailWrap = () => {
  const [page, setPage] = useState<string>();
  const location = useLocation();
  const { setIsOpen } = useContext(IsOpenContext)!;
  const { setIsWriteOpen } = useContext(NoticeContext)!;

  useEffect(() => {
    if (location.pathname === "/notice") {
      setPage("회사 게시물");
    } else if (location.pathname === "/notice/group") {
      setPage("부서 게시물");
    } else if (location.pathname === "/notice/team") {
      setPage("팀 게시물");
    }
  }, [location]);

  const clickHandler = () => {
    setIsOpen(true);
    setIsWriteOpen(true);
  };

  return (
    <Container>
      <div className="header">
        <div className="page_name">{page}</div>
        <div className="plus" onClick={clickHandler}>
          +
        </div>
      </div>
      <div className="contents_wrap">
        <Outlet />
      </div>
    </Container>
  );
};

export default DetailWrap;
