import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Title from "../components/global/Title";
import Wraper from "../components/global/Wraper";
import Calendar from "../components/main/Calendar";
import CalenderWrap from "../components/main/CalenderWrap";
import NoticeContainer from "../components/main/NoticeContainer";
import RatesWrap from "../components/main/RatesWrap";
import WeatherContents from "../components/main/WeatherContents";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainWraper = styled(Wraper)`
  padding-bottom: 80px;
`;

const MobileContainer = styled.div<{ isMobile: boolean }>`
  padding-bottom: ${(props) => (props.isMobile ? "180px" : "0")};
`;

const Main = () => {
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
      <Title title={"메인"} />
      <MainWraper>
        <MobileContainer isMobile={isMobile}>
          <GridWrap
            columns={isMobile ? "1fr" : "repeat(4, 1fr)"}
            rows="none"
            gap="20px"
            padding="0 0 20px 0"
            height={isMobile ? "auto" : "calc(100% - 165px)"}
            areas={
              isMobile
                ? `"notice"
              "weather"
              "todo"
              "exchange"
              "stock"`
                : `"notice notice notice weather"
              "exchange exchange exchange todo"
              "stock stock stock todo"`
            }
          >
            <ContentsWrap className="notice" title="공지사항">
              <GridWrap
                columns="repeat(3, 1fr)"
                rows="none"
                gap="20px"
                padding="15px 0"
                height="auto"
                areas="'company department team'"
              >
                <NoticeContainer
                  barColor="var(--point-color-y)"
                  title="회사공지"
                  areaName="company"
                />
                <NoticeContainer
                  barColor="var(--main-color)"
                  title="부서공지"
                  areaName="department"
                />
                <NoticeContainer
                  barColor="var(--point-color-br)"
                  title="팀내공지"
                  areaName="team"
                />
              </GridWrap>
            </ContentsWrap>
            <ContentsWrap className="exchange" title="환율">
              <GridWrap
                columns={windowWidth <= 1200 ? "1fr" : "repeat(4, 1fr)"}
                rows="none"
                gap="20px"
                padding="15px 0"
                height="auto"
                areas={windowWidth <= 1200 ? "'box1'" : "'box1 box2 box3 box4'"}
              >
                <RatesWrap areaName="box1" type="exchange" />
                {windowWidth > 1200 && (
                  <>
                    <RatesWrap areaName="box2" type="exchange" />
                    <RatesWrap areaName="box3" type="exchange" />
                    <RatesWrap areaName="box4" type="exchange" />
                  </>
                )}
              </GridWrap>
            </ContentsWrap>
            <ContentsWrap className="stock" title="주식">
              <GridWrap
                columns={windowWidth <= 1200 ? "1fr" : "repeat(4, 1fr)"}
                rows="none"
                gap="20px"
                padding="15px 0"
                height="auto"
                areas={windowWidth <= 1200 ? "'box1'" : "'box1 box2 box3 box4'"}
              >
                <RatesWrap areaName="box1" type="stock" />
                {windowWidth > 1200 && (
                  <>
                    <RatesWrap areaName="box2" type="stock" />
                    <RatesWrap areaName="box3" type="stock" />
                    <RatesWrap areaName="box4" type="stock" />
                  </>
                )}
              </GridWrap>
            </ContentsWrap>
            <WeatherContents />
            <CalenderWrap>
              <Calendar />
            </CalenderWrap>
          </GridWrap>
        </MobileContainer>
      </MainWraper>
    </>
  );
};

export default Main;
