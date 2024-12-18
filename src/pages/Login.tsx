import styled from "styled-components";
import LoginMain from "../components/login/pages/LoginMain";
import { useContext } from "react";
import { GoSignUpContext } from "../components/login/components/context/GoSignUpContext";
import { GoPasswordContxt } from "../components/login/components/context/GoPasswordContext";
import { GoLoginContext } from "../components/login/components/context/GoLoginContext";
import Password from "../components/login/pages/Password";
import SignUp from "../components/login/pages/SignUp";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 990;
  width: 100%;
  height: 100%;
  background-color: var(--sub-color-wh);
`;

const Login = () => {
  const { goSignUp } = useContext(GoSignUpContext)!;
  const { goPassword } = useContext(GoPasswordContxt)!;
  const { goLogin } = useContext(GoLoginContext)!;

  return (
    <Wrap>
      <Container>
        {goLogin ? (
          <LoginMain />
        ) : goPassword ? (
          <Password />
        ) : goSignUp ? (
          <SignUp />
        ) : null}
      </Container>
    </Wrap>
  );
};

export default Login;
