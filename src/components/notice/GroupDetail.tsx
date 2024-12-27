import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { NoticeContext } from "./context/NoticeContext";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: var(--sub-color-b);
    font-size: var(--top-size);
    font-weight: 900;
    padding: 5px 0;
    border-bottom: 1px solid var(--gray-3);
  }
  .detail {
    line-height: 30px;
    width: 80%;
    padding: 50px 0;
    display: flex;
    justify-content: flex-start;
    font-size: var(--normal-size);
    color: var(--sub-color-b);
  }
  .profile {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
    align-items: flex-end;
    .name {
      font-size: var(--noraml-size);
      padding-right: 10px;
      font-weight: 900;
      color: var(--sub-color-b);
    }
    .position {
      font-size: var(--medium-size);
      color: var(--main-color);
      font-weight: 900;
    }
  }
  .date {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    font-size: var(--normal-size);
    color: var(--sub-color-b);
  }
`;

const GroupDetail = () => {
  const { groupDetail } = useContext(NoticeContext)!;
  const [groupData, setGroupData] = useState<any>();
  useEffect(() => {
    if (groupDetail) {
      setGroupData({
        title: groupDetail.title,
        detail: groupDetail.detail,
        name: groupDetail.name,
        position: groupDetail.position,
        date: groupDetail.date,
      });
    }
  }, []);
  return (
    <Container>
      <div className="title">{groupData?.title}</div>
      <div className="detail">
        게시물:
        <br />
        {groupData?.detail}
      </div>
      <div className="profile">
        <div className="name">작성자 : {groupData?.name}</div>
        <div className="position">{groupData?.position}</div>
      </div>
      <div className="date">{groupData?.date}</div>
    </Container>
  );
};

export default GroupDetail;
