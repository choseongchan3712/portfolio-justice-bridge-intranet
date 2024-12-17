import styled from "styled-components";

const Container = styled.div`
max-width: 500px;
width: 100%;
padding: 0 35px;
display: flex;
flex-direction: column;
align-items: center;
`;

interface LoginInputWrapType {
  children: React.ReactNode;
}

const LoginInputWrap = ({children}:LoginInputWrapType) => {
  return <Container>
    {children}
  </Container>;
};

export default LoginInputWrap;