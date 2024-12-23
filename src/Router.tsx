import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { GoLoginProvider } from "./components/login/components/provider/GoLoginProvier";
import { GoPasswordProvider } from "./components/login/components/provider/GoPasswordProvider";
import GoSignUpProvider from "./components/login/components/provider/GoSignUpProvider";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Header from "./components/global/Header";
import Chat from "./pages/Chat";
import Document from "./pages/Document";
import Law from "./pages/Law";
import Management from "./pages/Management";
import Setting from "./pages/Setting";
import Notice from "./pages/Notice";
import SubEffectButton from "./components/global/SubEffectButton";
import PopUpContents from "./components/global/PopUpContents";
import { IsOpenProvider } from "./components/global/provider/IsOpenProvider";
import { IsCalOpenProvider } from "./components/global/provider/IsCalOpenProvider";

const Router = () => {
  const [isLogin, setIsLogin] = useState<boolean>(() => {
    const login = localStorage.getItem("login");
    return login === "true";
  });

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      if (login === "true") {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }
  }, []);
  console.log(isLogin);

  return (
    <HashRouter>
      <GoLoginProvider>
        <GoPasswordProvider>
          <GoSignUpProvider>
            <IsOpenProvider>
              <IsCalOpenProvider>
                {isLogin ? <Header /> : null}
                {isLogin ? <SubEffectButton /> : null}
                <PopUpContents />
                <Routes>
                  <Route
                    path="/"
                    element={
                      isLogin ? (
                        <Navigate to={"/main"} />
                      ) : (
                        <Navigate to={"/login"} />
                      )
                    }
                  />
                  <Route
                    path="/login"
                    element={isLogin ? <Navigate to={"/main"} /> : <Login />}
                  />
                  <Route
                    path="/main"
                    element={isLogin ? <Main /> : <Navigate to={"/login"} />}
                  />
                  <Route
                    path="/chat"
                    element={isLogin ? <Chat /> : <Navigate to={"/login"} />}
                  />
                  <Route
                    path="/document"
                    element={
                      isLogin ? <Document /> : <Navigate to={"/login"} />
                    }
                  />
                  <Route
                    path="/law"
                    element={isLogin ? <Law /> : <Navigate to={"/login"} />}
                  />
                  <Route
                    path="/notice"
                    element={isLogin ? <Notice /> : <Navigate to={"/login"} />}
                  />
                  <Route
                    path="/management"
                    element={
                      isLogin ? <Management /> : <Navigate to={"/login"} />
                    }
                  />
                  <Route
                    path="/setting"
                    element={isLogin ? <Setting /> : <Navigate to={"/login"} />}
                  />
                </Routes>
              </IsCalOpenProvider>
            </IsOpenProvider>
          </GoSignUpProvider>
        </GoPasswordProvider>
      </GoLoginProvider>
    </HashRouter>
  );
};

export default Router;
