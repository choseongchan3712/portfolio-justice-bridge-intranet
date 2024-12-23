import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--main-color);
  color: var(--sub-color-wh);
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: var(--normal-size);
  transition: 0.25s ease-in-out;

  &:hover {
    background-color: var(--point-color-y);
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: var(--gray-3);
    cursor: not-allowed;
    transform: none;
  }
`;

const SubmitButton = ():JSX.Element =>{
  return <Container type="submit">받아오기</Container>;
};

export default SubmitButton;