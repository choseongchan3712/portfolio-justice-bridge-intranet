import styled from "styled-components";

const Container = styled.div`
cursor: pointer;
  background-color: var(--back-r);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--normal-size);
  font-weight: 500;
  color: var(--sub-color-b);
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--main-color);
    color: var(--sub-color-wh);
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
  num: string;
}

const CalButton = ({ label, onClick, num }: ButtonProps) => {
  return (
    <Container className={num} onClick={onClick} style={{ gridArea: num }}>
      {label}
    </Container>
  );
};

export default CalButton;
