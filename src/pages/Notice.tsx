import Title from "../components/global/Title";
import Wraper from "../components/global/Wraper";
import NoticeWrap from "../components/notice/NoticeWrap";

const Notice = () => {
  return (
    <>
    <Title title="게시판"/>
      <Wraper>
        <NoticeWrap></NoticeWrap>
      </Wraper>
    </>
  );
};

export default Notice;
