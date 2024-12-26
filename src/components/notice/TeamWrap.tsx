import styled from "styled-components";
import NoticeEx from "./NoticeEx";
import { teamNotice } from "../../testData/textData";
import TeamContents from "./TeamContents";

const Container = styled.div``;

const TeamWrap = () => {
  return (
    <Container>
      <NoticeEx />
      {teamNotice.map((data, index) => (
        <TeamContents
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

export default TeamWrap;
