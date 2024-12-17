import styled from "styled-components";
import LoginMain from "./pages/LoginMain";
import { useContext, useEffect } from "react";
import { GoSignUpContext } from "./components/context/GoSignUpContext";
import { GoPasswordContxt } from "./components/context/GoPasswordContext";
import { GoLoginContext } from "./components/context/GoLoginContext";

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
  const {goSignUp, setGoSignUp} = useContext(GoSignUpContext)!;
  const {goPassword, setGoPassword} = useContext(GoPasswordContxt)!;
  const {goLogin, setGoLogin} = useContext(GoLoginContext)!;

  useEffect(()=>{
    if(goLogin) {
      setGoSignUp(false);
      
    }
  }, [goSignUp, goPassword, goLogin]);

  console.log(goSignUp);
  console.log(goPassword);
  console.log(goLogin);

  return (
    <Container>
      <LoginMain />
    </Container>
  );
};

export default Login;
