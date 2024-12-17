import styled from "styled-components";

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: var(--normal-size);
  padding-left: 65px;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.25s;
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

interface LoginInputType {
  placeholder: string;
  type: string;
}

const LoginInput = ({ placeholder, type }: LoginInputType) => {
  return <Input placeholder={`${placeholder}`} type={`${type}`} />;
};

export default LoginInput;
