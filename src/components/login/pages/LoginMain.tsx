import styled from "styled-components";
import LoginWrap from "../components/LoginWrap";
import LoginInputWrap from "../components/LoginInputWrap";
import LoginForm from "../components/LoginForm";
import LoginInput from "../components/LoginInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InputBox from "../components/InputBox";
import SubmitButton from "../components/SubmitButton";
import MoveButton from "../components/MoveButton";

const Container = styled.div`
  position: relative;
  z-index: 991;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    text-align: start;
    font-size: var(--big-size);
    font-weight: 900;
    margin-bottom: 50px;
  }
`;

const LoginMain = () => {
  const [sec, setSec] = useState<boolean>(true);
  const eyeHandler = () => {
    if (sec === true) {
      setSec(false);
    } else {
      setSec(true);
    }
  };

  return (
    <Container>
      <LoginWrap>
        <LoginInputWrap>
          <div className="title">WELCOME</div>
          <LoginForm>
            <InputBox>
              <LoginInput placeholder="아이디" type="text" />
              <FontAwesomeIcon icon={faIdCard} />
            </InputBox>
            <InputBox>
              <LoginInput
                placeholder="비밀번호"
                type={`${sec ? "password" : "text"}`}
              />
              <FontAwesomeIcon icon={faLock} />
              {sec ? (
                <FontAwesomeIcon icon={faEyeSlash} onClick={eyeHandler} />
              ) : (
                <FontAwesomeIcon icon={faEye} onClick={eyeHandler} />
              )}
            </InputBox>
            <SubmitButton>
              로그인
            </SubmitButton>
          </LoginForm>
          <MoveButton>
            비밀번호를 잊으셨나요?
          </MoveButton>
        </LoginInputWrap>
      </LoginWrap>
    </Container>
  );
};

export default LoginMain;
