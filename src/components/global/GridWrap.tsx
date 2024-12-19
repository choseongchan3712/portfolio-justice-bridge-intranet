import styled from "styled-components";
import { GridWrapType } from "../../type";

const Container = styled.div`
  width: 100%;
  display: grid;
`;

const GridWrap = ({
  rows,
  columns,
  areas,
  gap,
  padding,
  height,
  children,
}: GridWrapType) => {
  return (
    <Container
      style={{
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridTemplateAreas: areas,
        gap: gap,
        padding: padding,
        height: height,
      }}
    >
      {children}
    </Container>
  );
};

export default GridWrap;
