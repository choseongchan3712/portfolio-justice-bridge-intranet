import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  transition: 0.25s;
  div {
    font-size: var(--normal-size);
    color: var(--main-color);
    margin-right: 35px;
  }
  svg {
    color: var(--main-color);
  }
  &:hover {
    background-color: var(--main-color);
    div {
      color: var(--sub-color-wh);
    }
    svg {
      color: var(--sub-color-wh);
    }
  }
`;

const SignUpButton = () => {
  return (
    <Container>
      <div>회원가입</div>
      <FontAwesomeIcon icon={faAngleRight} />
    </Container>
  );
};

export default SignUpButton;
