import styled from "styled-components";
import { LawContainerType } from "../../type";

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 120px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--sub-color-wh);
  font-size: var(--medium-size);
  border-radius: 20px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  svg {
    font-size: var(--heading-size);
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 10px var(--gray-3);
  }
`;

const LawContainer = ({ color, children, areaName }: LawContainerType) => {
  return (
    <Container style={{ backgroundColor: color, gridArea: areaName }}>
      {children}
    </Container>
  );
};

export default LawContainer;
