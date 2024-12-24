import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Wraper from "../components/global/Wraper";
import LawContainer from "../components/law/LawContainer";
import { faBook, faDumpster, faGavel, faHandcuffs, faPersonMilitaryToPerson, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

const Law = () => {
  return (
    <Wraper>
      <GridWrap
        columns="repeat(2, 1fr)"
        rows="none"
        gap="20px"
        padding="0"
        height="100%"
        areas={`"public criminal""civil commercial""administrative procedural"`}
      >
        <ContentsWrap className="public" title="공법">
          <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="20px 0"
            height="100%"
            areas="'box1 box2 box3 box4'"
          >
            <LawContainer areaName="box1" color="var(--main-color)">
              <FontAwesomeIcon icon={faBook} />
              <div>헌법</div>
            </LawContainer>
            <LawContainer areaName="box2" color="var(--main-color)">
              <FontAwesomeIcon icon={faBook} />
              <div>국가공무원법</div>
            </LawContainer>
            <LawContainer areaName="box3" color="var(--main-color)">
              <FontAwesomeIcon icon={faBook} />
              <div>지방공무원법</div>
            </LawContainer>
            <LawContainer areaName="box4" color="var(--main-color)">
              <FontAwesomeIcon icon={faBook} />
              <div>경찰관직무집행법</div>
            </LawContainer>
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="criminal" title="형사법">
        <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="20px 0"
            height="100%"
            areas="'box1 box2 box3 box4'"
          >
            <LawContainer areaName="box1" color="var(--point-color-y)">
              <FontAwesomeIcon icon={faHandcuffs} />
              <div>형법</div>
            </LawContainer>
            <LawContainer areaName="box2" color="var(--point-color-y)">
              <FontAwesomeIcon icon={faHandcuffs} />
              <div>특정범죄<br/>가중처벌법</div>
            </LawContainer>
            <LawContainer areaName="box3" color="var(--point-color-y)">
              <FontAwesomeIcon icon={faHandcuffs} />
              <div>성폭력범죄의 처벌 <br/>등에 관한 특례법</div>
            </LawContainer>
            <LawContainer areaName="box4" color="var(--point-color-y)">
              <FontAwesomeIcon icon={faHandcuffs} />
              <div>아동·청소년의 <br/>성보호에 관한 법률</div>
            </LawContainer>
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="civil" title="민사법">
        <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="20px 0"
            height="100%"
            areas="'box1 box2 box3 box4'"
          >
            <LawContainer areaName="box1" color="var(--point-color-br)">
              <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
              <div>민법</div>
            </LawContainer>
            <LawContainer areaName="box2" color="var(--point-color-br)">
              <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
              <div>가족관계의 등록 <br/>등에 관한 법률</div>
            </LawContainer>
            <LawContainer areaName="box3" color="var(--point-color-br)">
              <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
              <div>부동산등기법</div>
            </LawContainer>
            <LawContainer areaName="box4" color="var(--point-color-br)">
              <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
              <div>상가건물<br/>임대차보호법</div>
            </LawContainer>
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="commercial" title="상법">
        <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="20px 0"
            height="100%"
            areas="'box1 box2 box3 box4'"
          >
            <LawContainer areaName="box1" color="var(--snow-dark)">
              <FontAwesomeIcon icon={faDumpster} />
              <div>상법</div>
            </LawContainer>
            <LawContainer areaName="box2" color="var(--snow-dark)">
              <FontAwesomeIcon icon={faDumpster} />
              <div>어음법</div>
            </LawContainer>
            <LawContainer areaName="box3" color="var(--snow-dark)">
              <FontAwesomeIcon icon={faDumpster} />
              <div>전자상거래 등에서의 <br/>소비자보호에 <br/>관한 법률</div>
            </LawContainer>
            <LawContainer areaName="box4" color="var(--snow-dark)">
              <FontAwesomeIcon icon={faDumpster} />
              <div>공정거래법</div>
            </LawContainer>
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="administrative" title="행정법">
        <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="20px 0"
            height="100%"
            areas="'box1 box2 box3 box4'"
          >
            <LawContainer areaName="box1" color="var(--cloud-dark)">
              <FontAwesomeIcon icon={faGavel} />
              <div>행정기본법</div>
            </LawContainer>
            <LawContainer areaName="box2" color="var(--cloud-dark)">
              <FontAwesomeIcon icon={faGavel} />
              <div>행정절차법</div>
            </LawContainer>
            <LawContainer areaName="box3" color="var(--cloud-dark)">
              <FontAwesomeIcon icon={faGavel} />
              <div>토지보상법</div>
            </LawContainer>
            <LawContainer areaName="box4" color="var(--cloud-dark)">
              <FontAwesomeIcon icon={faGavel} />
              <div>공공기관의 <br/>정보공개에 관한 법률</div>
            </LawContainer>
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="procedural" title="절차법">
        <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="20px 0"
            height="100%"
            areas="'box1 box2 box3 box4'"
          >
            <LawContainer areaName="box1" color="var(--rain-light)">
              <FontAwesomeIcon icon={faScaleBalanced} />
              <div>민사소송법</div>
            </LawContainer>
            <LawContainer areaName="box2" color="var(--rain-light)">
              <FontAwesomeIcon icon={faScaleBalanced} />
              <div>형사소송법</div>
            </LawContainer>
            <LawContainer areaName="box3" color="var(--rain-light)">
              <FontAwesomeIcon icon={faScaleBalanced} />
              <div>가사소송법</div>
            </LawContainer>
            <LawContainer areaName="box4" color="var(--rain-light)">
              <FontAwesomeIcon icon={faScaleBalanced} />
              <div>행정소송법</div>
            </LawContainer>
          </GridWrap>
        </ContentsWrap>
      </GridWrap>
    </Wraper>
  );
};

export default Law;
