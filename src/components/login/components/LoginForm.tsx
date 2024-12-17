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
  submitHandler: (value: any) =>void
}

const LoginForm = ({children, submitHandler}:LoginFormType) =>{
  return <Container onSubmit={submitHandler}>{children}</Container>;
};

export default LoginForm;