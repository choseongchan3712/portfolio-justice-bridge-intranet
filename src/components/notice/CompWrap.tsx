import styled from "styled-components";
import NoticeEx from "./NoticeEx";
import { compNotice } from "../../testData/textData";
import CompContents from "./CompContents";
import { useContext, useEffect, useState } from "react";
import { IsOpenContext } from "../global/context/IsOpenContext";

const Container = styled.div``;

const CompWrap = () => {
  const {isOpen} = useContext(IsOpenContext)!;
  const [compDetail, setCompDetail] = useState<any[]>();

  useEffect(()=>{
    if (isOpen === false) {
      setCompDetail(compNotice);
    }
  }, [isOpen])

  return (
    <Container>
      <NoticeEx />
      {compDetail?.map((data:any, index:number) => (
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
