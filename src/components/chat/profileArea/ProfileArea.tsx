import styled from "styled-components";
import TitleWrap from "../TitleWrap";
import GroupList from "./GroupList";
import TeamList from "./TeamList";
import Menber from "./Member";
import { groupChart } from "../../../testData/textData";

const Container = styled.div`
  position: relative;
  width: 25%;
  height: auto;
  overflow-y: scroll;
  padding: 0 20px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const DetailWrap = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
`;

const ProfileArea = () => {
  return (
    <Container>
      <TitleWrap>
        <div className="group">조직도</div>
      </TitleWrap>
      <DetailWrap>
        {groupChart.map((data, index) => (
          <GroupList group={data.department} key={index}>
            {data.detail.map((value: any, index: number) => (
              <TeamList team={value.team} key={index}>
                {value.member.map((member: any, index: number) => (
                  <Menber
                    rank={member.rank}
                    name={member.name}
                    position={member.position}
                    key={index}
                  />
                ))}
              </TeamList>
            ))}
          </GroupList>
        ))}
      </DetailWrap>
    </Container>
  );
};

export default ProfileArea;
