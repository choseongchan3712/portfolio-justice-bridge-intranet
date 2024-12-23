import styled from "styled-components";

const Container = styled.div`
grid-area: display;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--top-size);
  font-weight: 500;
  color: var(--main-color);
  background-color: var(--back-r);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

interface DisplayType {
  value: string;
}

const Display = ({value}:DisplayType) => {
  return <Container className="display">{value}</Container>;
};

export default Display;