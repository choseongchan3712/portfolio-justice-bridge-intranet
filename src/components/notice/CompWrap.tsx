import styled from "styled-components";
import NoticeEx from "./NoticeEx";
import { compNotice } from "../../testData/textData";
import CompContents from "./CompContents";

const Container = styled.div``;

const CompWrap = () => {
  return (
    <Container>
      <NoticeEx />
      {compNotice.map((data, index) => (
        <CompContents
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

export default CompWrap;
