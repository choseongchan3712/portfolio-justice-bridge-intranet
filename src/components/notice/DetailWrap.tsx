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
`;

const DetailWrap = () => {
  const [page, setPage] = useState<string>();
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === "/notice") {
      setPage("회사 게시물");
    } else if (location.pathname === "/notice/group") {
      setPage("부서 게시물")
    } else if (location.pathname === "/notice/team") {
      setPage("팀 게시물")
    }
  }, [location])

  return (
    <Container>
      <div className="header">{page}</div>
      <Outlet />
    </Container>
  );
};

export default DetailWrap;
