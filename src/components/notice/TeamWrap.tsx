import styled from "styled-components";
import NoticeEx from "./NoticeEx";
import { teamNotice } from "../../testData/textData";
import TeamContents from "./TeamContents";
import { IsOpenContext } from "../global/context/IsOpenContext";
import { useContext, useEffect, useState } from "react";

const Container = styled.div``;

const TeamWrap = () => {
  const { isOpen } = useContext(IsOpenContext)!;
  const [teamDetail, setTeamDetail] = useState<any[]>();

  useEffect(() => {
    if (isOpen === false) {
      setTeamDetail(teamNotice);
    }
  }, [isOpen]);

  return (
    <Container>
      <NoticeEx />
      {teamDetail?.map((data, index) => (
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
