import styled from "styled-components";
import NoticeEx from "./NoticeEx";
import { groupNotice } from "../../testData/textData";
import GroupContents from "./GroupContents";

const Container = styled.div``;

const GroupWrap = () => {
  return (
    <Container>
      <NoticeEx />
      {groupNotice.map((data, index) => (
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
