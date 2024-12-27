import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../global/context/ThemeContext";

const Container = styled.div`
  width: 20%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: var(--title-size);
  font-weight: 900;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

interface colorType {
  color: string;
  text: string;
  bgColor: string;
}

const ThemeWrap = ({ color, text, bgColor }: colorType) => {
  const conRef = useRef<HTMLDivElement | null>(null);
  const [modify, setModify] = useState<boolean>(false);
  const { setThemeMode } = useContext(ThemeContext)!;

  const clickHandler = () => {
    if (conRef.current?.textContent === "일반") {
      localStorage.setItem("theme", "normal");
    } else if (conRef.current?.textContent === "다크") {
      localStorage.setItem("theme", "dark");
    } else if (conRef.current?.textContent === "엣지") {
      localStorage.setItem("theme", "edge");
    }
    setModify(true);
  };
  useEffect(() => {
    setThemeMode(localStorage.getItem("theme")!);
    setModify(false);
  }, [modify]);

  return (
    <Container
      style={{ color: color, backgroundColor: bgColor }}
      onClick={clickHandler}
      ref={conRef}
    >
      {text}
    </Container>
  );
};

export default ThemeWrap;
