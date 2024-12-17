import styled from "styled-components";
import LoginWrap from "../components/LoginWrap";
import LoginInputWrap from "../components/LoginInputWrap";
import LoginForm from "../components/LoginForm";
import LoginInput from "../components/LoginInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext,} from "react";
import InputBox from "../components/InputBox";
import SubmitButton from "../components/SubmitButton";
import MoveButton from "../components/MoveButton";
import { GoPasswordContxt } from "../components/context/GoPasswordContext";
import { GoSignUpContext } from "../components/context/GoSignUpContext";
import { GoLoginContext } from "../components/context/GoLoginContext";

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

const Password = () => {
    const { setGoPassword } = useContext(GoPasswordContxt)!;
    const { setGoSignUp } = useContext(GoSignUpContext)!;
    const { setGoLogin } = useContext(GoLoginContext)!;
    
  
    const moveButtonHandler = () => {
      setGoPassword(false);
      setGoSignUp(false);
      setGoLogin(true);
    };

    const passwordHandler = () => {};

  return (
    <Container>
      <LoginWrap>
        <LoginInputWrap>
          <div className="title">비밀번호 찾기</div>
          <LoginForm submitHandler={passwordHandler}>
            <InputBox>
              <LoginInput placeholder="아이디" type="text" />
              <FontAwesomeIcon icon={faIdCard} />
            </InputBox>
            <InputBox>
              <LoginInput
                placeholder="이메일"
                type="test"
              />
              <FontAwesomeIcon icon={faEnvelope} />
            </InputBox>
            <SubmitButton>비밀번호 찾기</SubmitButton>
          </LoginForm>
          <MoveButton clickHandler={moveButtonHandler}>
            로그인으로 돌아가기
          </MoveButton>
        </LoginInputWrap>
      </LoginWrap>
    </Container>
  );
};

export default Password;