import styled from "styled-components";
import Login from "../components/login/Login";

const Container = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 0;
overflow: hidden;
`;

const Main = () => {
  return <Container>
  <Login></Login></Container>;
};

export default Main;
