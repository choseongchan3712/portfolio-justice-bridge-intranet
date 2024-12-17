import styled from "styled-components";
import LoginInputWrap from "../components/LoginInputWrap";
import LoginForm from "../components/LoginForm";
import InputBox from "../components/InputBox";
import LoginInput from "../components/LoginInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faIdCard, faLock } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../components/SubmitButton";
import MoveButton from "../components/MoveButton";
import { useContext, useState } from "react";
import { GoPasswordContxt } from "../components/context/GoPasswordContext";
import { GoSignUpContext } from "../components/context/GoSignUpContext";
import { GoLoginContext } from "../components/context/GoLoginContext";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img_wrap {
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    img {
      position: absolute;
      transform: scaleX(-1);
      width: 170%;
      left: 0px;
      top: -45px;
      z-index: 1;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
    }
  }
  .sign_wrap {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    width: 100%;
    text-align: start;
    font-size: var(--big-size);
    font-weight: 900;
    margin-bottom: 50px;
  }
`;

const SignUp = () => {
  const [sec, setSec] = useState<boolean>(true);
  const { setGoPassword } = useContext(GoPasswordContxt)!;
  const { setGoSignUp } = useContext(GoSignUpContext)!;
  const { setGoLogin } = useContext(GoLoginContext)!;

  const moveButtonHandler = () => {
    setGoPassword(false);
    setGoSignUp(false);
    setGoLogin(true);
  };
  const eyeHandler = () => {
    if (sec === true) {
      setSec(false);
    } else {
      setSec(true);
    }
  };

  const signUpHandler = () => {};

  return (
    <Container>
      <div className="img_wrap">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/16/10/50/ai-generated-8511918_1280.jpg"
          alt="sign_up_img"
        />
      </div>
      <div className="sign_wrap">
        <LoginInputWrap>
          <div className="title">회원가입</div>
          <LoginForm submitHandler={signUpHandler}>
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
            <InputBox>
              <LoginInput placeholder="이메일" type="test" />
              <FontAwesomeIcon icon={faEnvelope} />
            </InputBox>
            <SubmitButton>회원가입</SubmitButton>
          </LoginForm>
          <MoveButton clickHandler={moveButtonHandler}>
            로그인으로 돌아가기
          </MoveButton>
        </LoginInputWrap>
      </div>
    </Container>
  );
};

export default SignUp;
