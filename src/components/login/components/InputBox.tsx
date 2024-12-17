import styled from "styled-components";

const Container = styled.div`
position: relative;
  width: 100%;
  margin-bottom: 15px;
  svg:nth-of-type(1){
    position: absolute;
    color: var(--gray-3);
    font-size: var(--normal-size);
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }
  svg:nth-of-type(2){
    position: absolute;
    color: var(--gray-3);
    font-size: var(--normal-size);
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

interface InputBoxType {
  children: React.ReactNode;
}

const InputBox = ({children}:InputBoxType) =>{
  return <Container>{children}</Container>;
};

export default InputBox;