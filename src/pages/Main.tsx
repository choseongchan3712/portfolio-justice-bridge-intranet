import styled from "styled-components";
import Login from "../components/login/Login";
import GoSignUpProvider from "../components/login/components/provider/GoSignUpProvider";
import { GoPasswordProvider } from "../components/login/components/provider/GoPasswordProvider";
import { GoLoginProvider } from "../components/login/components/provider/GoLoginProvier";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const Main = () => {
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    const localLogin = localStorage.getItem("login");
    if (JSON.parse(localLogin!)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  console.log(isLogin);

  return (
    <>
      {isLogin ? (
        <>login success</>
      ) : (
        <Container>
          <GoLoginProvider>
            <GoPasswordProvider>
              <GoSignUpProvider>
                <Login></Login>
              </GoSignUpProvider>
            </GoPasswordProvider>
          </GoLoginProvider>
        </Container>
      )}
    </>
  );
};

export default Main;
