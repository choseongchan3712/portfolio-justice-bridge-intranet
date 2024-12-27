import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { compNotice, groupNotice, teamNotice } from "../../testData/textData";

dayjs.locale("ko");

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .title_wrap {
      display: flex;
      width: 80%;
      color: var(--sub-color-b);
      font-size: var(--normal-size);
      height: 50px;
      align-items: center;
      .title {
        padding-right: 10px;
        font-weight: 900;
      }
      input {
        all: unset;
        width: 80%;
        height: 70%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--gray-2);
        &:focus {
          border-bottom: 1px solid var(--main-color);
        }
      }
    }
    .detail_wrap {
      width: 100%;
      display: flex;
      padding-top: 20px;
      .detail {
        padding: 0 10px 0 0;
        color: var(--sub-color-b);
        font-size: var(--normal-size);
      }
      textarea {
        all: unset;
        height: 50%;
        border: 1px solid var(--gray-2);
        height: 200px;
        width: 50%;
        border-radius: 10px;
        padding: 10px;
        &:focus {
          border: 1px solid var(--sub-color-b);
        }
      }
    }
    .select_wrap {
      display: flex;
      padding: 20px 0;
      align-items: center;
      .select {
        padding-right: 10px;
        font-size: var(--normal-size);
        color: var(--sub-color-b);
      }
      select {
        all: unset;
        display: flex;
        align-items: center;
        width: 30%;
        height: 30px;
        padding: 0 10px;
        border: 1px solid var(--gray-2);
        border-radius: 10px;
        &:focus {
          border: 1px solid var(--sub-color-b);
        }
      }
    }
    button {
      all: unset;
      background-color: var(--gray-3);
      color: var(--sub-color-wh);
      width: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      font-size: var(--normal-size);
      font-weight: 900;
      cursor: pointer;
      border-radius: 20px;
      transition: 0.25s ease-in-out;
      &:hover {
        background-color: var(--main-color);
      }
    }
  }
`;

const NoticeWrite = () => {
  const [write, setWrite] = useState<any>();
  const [time, setTime] = useState<string>();
  const [choice, setChoice] = useState<string>();
  const [complete, setcomplete] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setWrite({
      title: `${data.title}`,
      name: "수달",
      position: "변호사",
      detail: `${data.detail}`,
    });
    setChoice(`${data.select}`);
    reset();
  };

  useEffect(() => {
    if (write) {
      const nowTime = dayjs().format("YYYY-MM-DD");
      setTime(nowTime);
    }
  }, [write]);

  useEffect(() => {
    if (time) {
      setWrite({ ...write, date: time });
      setcomplete(true);
    }
  }, [time]);

  useEffect(() => {
    if (complete) {
      if (choice === "comp") {
        compNotice.push(write);
      } else if (choice === "group") {
        groupNotice.push(write);
      } else if (choice === "team") {
        teamNotice.push(write);
      }
    }
    setcomplete(false);
  }, [complete]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title_wrap">
          <div className="title">제목 :</div>
          <input
            type="text"
            {...register("title", { required: "제목은 필수입니다." })}
          />
        </div>
        <div className="detail_wrap">
          <div className="detail">게시글 :</div>
          <textarea
            {...register("detail", { required: "게시글 내용은 필수 입니다." })}
          ></textarea>
        </div>
        <div className="select_wrap">
          <div className="select">등록 선택 : </div>
          <select {...register("select")}>
            <option value="comp">회사 게시물</option>
            <option value="group">부서 게시물</option>
            <option value="team">팀 게시물</option>
          </select>
        </div>
        <button type="submit">등록하기</button>
      </form>
    </Container>
  );
};

export default NoticeWrite;
