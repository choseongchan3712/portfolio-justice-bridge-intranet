import styled from "styled-components";
import LoginMain from "./pages/LoginMain";

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
  return <Container>
    <LoginMain />
  </Container>;
};

export default Login;