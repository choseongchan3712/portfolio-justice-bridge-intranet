import styled from "styled-components";
import NoticeEx from "./NoticeEx";
import { groupNotice } from "../../testData/textData";
import GroupContents from "./GroupContents";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { useContext, useEffect, useState } from "react";

const Container = styled.div``;

const GroupWrap = () => {
  const { isOpen } = useContext(IsOpenContext)!;
  const [groupDetail, setGroupDetail] = useState<any[]>();

  useEffect(() => {
    if (isOpen === false) {
      setGroupDetail(groupNotice);
    }
  }, [isOpen]);

  return (
    <Container>
      <NoticeEx />
      {groupDetail?.map((data, index) => (
        <GroupContents
          key={index}
          date={data.date}
          id={`${data.id}`}
          name={data.name}
          position={data.position}
          title={data.title}
          detail={data.detail}
        />
      ))}
    </Container>
  );
};

export default GroupWrap;
