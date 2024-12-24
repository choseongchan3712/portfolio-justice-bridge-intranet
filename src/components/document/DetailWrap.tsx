import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.form`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
interface DetailWrapType {
  children: ReactNode;
  submitHandler: (data: React.FormEvent<HTMLFormElement>) => void;
}
const preventSubmitOnEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const DetailWrap = ({ children, submitHandler }: DetailWrapType): JSX.Element => {
  return <Container onSubmit={submitHandler} onKeyDown={preventSubmitOnEnter}>{children}</Container>;
};

export default DetailWrap;
