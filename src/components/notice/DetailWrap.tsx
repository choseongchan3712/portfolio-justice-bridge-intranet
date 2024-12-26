import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

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
    justify-content: flex-start;
    color: var(--sub-color-b);
    font-size: var(--title-size);
    font-weight: 900;
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

  useEffect(() => {
    if (location.pathname === "/notice") {
      setPage("회사 게시물");
    } else if (location.pathname === "/notice/group") {
      setPage("부서 게시물");
    } else if (location.pathname === "/notice/team") {
      setPage("팀 게시물");
    }
  }, [location]);

  return (
    <Container>
      <div className="header">{page}</div>
      <div className="contents_wrap">
        <Outlet />
      </div>
    </Container>
  );
};

export default DetailWrap;
