import styled from "styled-components";
import SignUpButton from "./SignUpButton";

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: var(--title-size);
    font-weight: bolder;
    color: var(--main-color);
  }
`;

const LoginHeader = () => {
  return (
    <Container>
      <div className="logo">JusticeBridge</div>
      <SignUpButton />
    </Container>
  );
};

export default LoginHeader;
