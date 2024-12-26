import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ChattingContext } from "../context/ChattingContext";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  background-color: var(--sub-color-wh);
  padding: 0 20px;
  bottom: 0;
  left: 0;
  form {
    position: relative;
    width: 100%;
    height: 100%;
    border-top: 1px solid var(--gray-2);
    position: relative;
    display: flex;
    align-items: center;
    input {
      all: unset;
      box-sizing: border-box;
      height: 100%;
      width: 90%;
      padding-left: 10px;
      display: flex;
      align-items: center;
      font-size: var(--normal-size);
      color: var(--sub-color-b);
    }
    button {
      all: unset;
      width: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      svg {
        color: var(--gray-3);
        font-size: var(--normal-size);
        cursor: pointer;
        transition: 0.25s ease-in-out;
        &:hover {
          color: var(--sub-color-b);
        }
      }
    }
  }
`;

interface ChatInputType {
  message: any;
  setMessage: (data: any) => void;
}

const ChatInput = ({ message, setMessage }: ChatInputType) => {
  const { chatting, setChatting } = useContext(ChattingContext)!;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: any) => {
    if (message) {
      setMessage([...message, data.input]);
    } else {
      setMessage([data.input]);
    }
    if (chatting) {
      setChatting({ ...chatting, text: [...chatting.text, data.input] });
    } else {
      setChatting("");
    }
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="채팅을 입력하세요..."
          {...register("input", { required: "내용은 필수 입니다." })}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </Container>
  );
};

export default ChatInput;
