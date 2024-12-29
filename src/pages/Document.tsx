import DocContainer from "../components/document/DocContainer";
import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Title from "../components/global/Title";
import Wraper from "../components/global/Wraper";

const Document = () => {
  return (
    <>
      <Title title="문서관리" />
      <Wraper>
        <GridWrap
          columns="repeat(4, 1fr)"
          rows="none"
          gap="20px"
          padding="0 0 20px 0"
          height="calc(100% - 165px)"
          areas="'civil civil criminal criminal' 'admin admin bond bond'"
        >
          <ContentsWrap className="civil" title="민사소송">
            <GridWrap
              columns="repeat(2, 1fr)"
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas="'complaint agreement'"
            >
              <DocContainer
                areaName="complaint"
                title="민사소장"
              ></DocContainer>
              <DocContainer
                areaName="agreement"
                title="관할합의서"
              ></DocContainer>
            </GridWrap>
          </ContentsWrap>
          <ContentsWrap className="criminal" title="형사소송">
            <GridWrap
              columns="repeat(2, 1fr)"
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas="'plaint withdraw'"
            >
              <DocContainer areaName="plaint" title="고소장"></DocContainer>
              <DocContainer
                areaName="withdraw"
                title="고소취하서"
              ></DocContainer>
            </GridWrap>
          </ContentsWrap>
          <ContentsWrap className="admin" title="행정소송">
            <GridWrap
              columns="repeat(2, 1fr)"
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas="'admin_plaint judgment'"
            >
              <DocContainer
                areaName="admin_plaint"
                title="행정소장"
              ></DocContainer>
              <DocContainer
                areaName="judgment"
                title="행정심판 청구"
              ></DocContainer>
            </GridWrap>
          </ContentsWrap>
          <ContentsWrap className="bond" title="채권/체무">
            <GridWrap
              columns="repeat(2, 1fr)"
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas="'iou waiver'"
            >
              <DocContainer areaName="iou" title="금전차용증서"></DocContainer>
              <DocContainer areaName="waiver" title="포기각서"></DocContainer>
            </GridWrap>
          </ContentsWrap>
        </GridWrap>
      </Wraper>
    </>
  );
};

export default Document;
