import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Wraper from "../components/global/Wraper";
import NoticeContainer from "../components/main/NoticeContainer";

const Main = () => {
  return (
    <Wraper>
      <GridWrap
        rows="repeat(3, 1fr)"
        columns="repeat(4, 1fr)"
        gap="20px"
        padding="0 0 20px 0"
        height="calc(100% - 165px)"
        areas={
          "'notice notice notice weather' 'exchange exchange exchange todo' 'stock stock stock todo'"
        }
      >
        <ContentsWrap className="notice" title="공지사항">
          <GridWrap
            columns="repeat(3, 1fr)"
            rows="repeat(1, 1fr)"
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
          <></>
        </ContentsWrap>
        <ContentsWrap className="stock" title="주식">
          <></>
        </ContentsWrap>
        <ContentsWrap className="weather" title="날씨">
          <></>
        </ContentsWrap>
        <ContentsWrap className="todo" title="12월 2024">
          <></>
        </ContentsWrap>
      </GridWrap>
    </Wraper>
  );
};

export default Main;
