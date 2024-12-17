import styled from "styled-components";
import LoginHeader from "./LoginHeader";

const Container = styled.div`
  position: relative;
  height: 100%;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoginWrapType {
  children: React.ReactNode;
}

const LoginWrap = ({ children }: LoginWrapType) => {
  return (
    <Container>
      <LoginHeader />
      {children}
    </Container>
  );
};

export default LoginWrap;
