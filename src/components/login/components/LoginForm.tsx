import styled from "styled-components";

const Container = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

interface LoginFormType {
  children: React.ReactNode;
}

const LoginForm = ({children}:LoginFormType) =>{
  return <Container>{children}</Container>;
};

export default LoginForm;