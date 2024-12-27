import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { GoLoginProvider } from "./components/login/components/provider/GoLoginProvier";
import { GoPasswordProvider } from "./components/login/components/provider/GoPasswordProvider";
import GoSignUpProvider from "./components/login/components/provider/GoSignUpProvider";
import { useContext, useEffect, useState } from "react";
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
import { DocProvider } from "./components/global/provider/DocProvider";
import { LawProvider } from "./components/global/provider/LawProvider";
import { ChattingProvider } from "./components/chat/provider/ChattingProvider";
import CompWrap from "./components/notice/CompWrap";
import GroupWrap from "./components/notice/GroupWrap";
import TeamWrap from "./components/notice/TeamWrap";
import { NoticeProvider } from "./components/notice/provider/NoticeProvider";
import AnimatedCursor from "react-animated-cursor";
import { ThemeContext } from "./components/global/context/ThemeContext";

const Router = () => {
  const { themeMode } = useContext(ThemeContext)!;
  const [mouseEdge, setMouseEdge] = useState<boolean>(false);
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

  useEffect(() => {
    if (themeMode === "edge") {
      setMouseEdge(true);
    } else {
      setMouseEdge(false);
    }
  }, [themeMode]);

  console.log(mouseEdge);

  return (
    <HashRouter>
      <GoLoginProvider>
        <GoPasswordProvider>
          <GoSignUpProvider>
            <IsOpenProvider>
              <IsCalOpenProvider>
                <DocProvider>
                  <LawProvider>
                    <ChattingProvider>
                      <NoticeProvider>
                        {mouseEdge ? (
                          <AnimatedCursor
                            innerSize={8} // 안쪽 크기
                            outerSize={35} // 바깥쪽 크기
                            innerScale={1} // 안쪽 커서 크기 비율
                            outerScale={1.7} // 바깥쪽 커서 크기 비율
                            outerAlpha={0} // 외부 커서의 투명도
                            innerStyle={{
                              borderRadius: "50%", // 마우스를 동그랗게
                              backgroundColor: "#325935", // 커서 색상
                            }}
                            outerStyle={{
                              borderRadius: "50%",
                              backgroundColor: "#DAD9DA",
                              mixBlendMode: "difference",
                            }}
                          />
                        ) : null}
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
                            element={
                              isLogin ? <Navigate to={"/main"} /> : <Login />
                            }
                          />
                          <Route
                            path="/main"
                            element={
                              isLogin ? <Main /> : <Navigate to={"/login"} />
                            }
                          />
                          <Route
                            path="/chat"
                            element={
                              isLogin ? <Chat /> : <Navigate to={"/login"} />
                            }
                          />
                          <Route
                            path="/document"
                            element={
                              isLogin ? (
                                <Document />
                              ) : (
                                <Navigate to={"/login"} />
                              )
                            }
                          />
                          <Route
                            path="/law"
                            element={
                              isLogin ? <Law /> : <Navigate to={"/login"} />
                            }
                          />
                          <Route
                            path="/notice"
                            element={
                              isLogin ? <Notice /> : <Navigate to={"/login"} />
                            }
                          >
                            <Route index element={<CompWrap />} />
                            <Route path="group" element={<GroupWrap />} />
                            <Route path="team" element={<TeamWrap />} />
                          </Route>
                          <Route
                            path="/management"
                            element={
                              isLogin ? (
                                <Management />
                              ) : (
                                <Navigate to={"/login"} />
                              )
                            }
                          />
                          <Route
                            path="/setting"
                            element={
                              isLogin ? <Setting /> : <Navigate to={"/login"} />
                            }
                          />
                        </Routes>
                      </NoticeProvider>
                    </ChattingProvider>
                  </LawProvider>
                </DocProvider>
              </IsCalOpenProvider>
            </IsOpenProvider>
          </GoSignUpProvider>
        </GoPasswordProvider>
      </GoLoginProvider>
    </HashRouter>
  );
};

export default Router;
