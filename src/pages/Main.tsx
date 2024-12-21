
import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Wraper from "../components/global/Wraper";
import NoticeContainer from "../components/main/NoticeContainer";
import RatesWrap from "../components/main/RatesWrap";
import WeatherContents from "../components/main/WeatherContents";

const Main = () => {
  return (
    <Wraper>
      <GridWrap
        columns="repeat(4, 1fr)"
        rows="none"
        gap="20px"
        padding="0 0 20px 0"
        height="calc(100% - 165px)"
        areas={`"notice notice notice weather""exchange exchange exchange todo""stock stock stock todo"`}
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
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="15px 0"
            height="auto"
            areas="'box1 box2 box3 box4'"
          >
            <RatesWrap areaName="box1" type="exchange" />
            <RatesWrap areaName="box2" type="exchange" />
            <RatesWrap areaName="box3" type="exchange" />
            <RatesWrap areaName="box4" type="exchange" />
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="stock" title="주식">
          <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="15px 0"
            height="auto"
            areas={`"box1 box2 box3 box4"`}
          >
            <RatesWrap areaName="box1" type="stock" />
            <RatesWrap areaName="box2" type="stock" />
            <RatesWrap areaName="box3" type="stock" />
            <RatesWrap areaName="box4" type="stock" />
          </GridWrap>
        </ContentsWrap>
        <WeatherContents></WeatherContents>
        <ContentsWrap className="todo" title="12월 2024">
          <></>
        </ContentsWrap>
      </GridWrap>
    </Wraper>
  );
};

export default Main;
