import DocContainer from "../components/document/DocContainer";
import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Title from "../components/global/Title";
import Wraper from "../components/global/Wraper";
import { useEffect, useState } from "react";

const Document = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 1200;

  return (
    <>
      <Title title="문서관리" />
      <Wraper>
        <GridWrap
          columns={isMobile ? "1fr" : "repeat(4, 1fr)"}
          rows="none"
          gap="20px"
          padding="0 0 20px 0"
          height={isMobile ? "auto" : "calc(100% - 165px)"}
          areas={
            isMobile
              ? `"civil"
                 "criminal"
                 "admin"
                 "bond"`
              : `"civil civil criminal criminal"
                 "admin admin bond bond"`
          }
        >
          <ContentsWrap className="civil" title="민사소송">
            <GridWrap
              columns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas={
                isMobile
                  ? `"complaint"
                     "agreement"`
                  : `"complaint agreement"`
              }
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
              columns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas={
                isMobile
                  ? `"plaint"
                     "withdraw"`
                  : `"plaint withdraw"`
              }
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
              columns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas={
                isMobile
                  ? `"admin_plaint"
                     "judgment"`
                  : `"admin_plaint judgment"`
              }
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
              columns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              rows="none"
              gap="20px"
              padding="15px 0"
              height="auto"
              areas={
                isMobile
                  ? `"iou"
                     "waiver"`
                  : `"iou waiver"`
              }
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
