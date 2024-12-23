import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { PopUpContentsType } from "../../type";
import { IsOpenContext } from "./context/IsOpenContext";

const Container = styled.div`
  position: fixed;
  z-index: -990;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, var(--gray-3) 20%, var(--op-gray-2) 100%);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: 0.25s ease-in-out;
  .contents_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: absolute;
    z-index: 991;
    width: 70%;
    height: 70%;
    background-color: var(--sub-color-wh);
    border-radius: 20px;
    transform: scale(0);
    transition: 0.25s ease-in-out;
    transform-origin: center;
    overflow: hidden;
    .x_mark {
      position: absolute;
      z-index: 992;
      cursor: pointer;
      right: 10px;
      top: 10px;
      color: var(--gray-3);
      font-size: var(--top-size);
    }
  }
`;

const PopUpContents = ({ children }: PopUpContentsType) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentsRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;

  const clickHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (contentsRef.current && containerRef.current) {
      if (isOpen === true) {
        contentsRef.current.style.transform = "scale(1)";
        containerRef.current.style.opacity = "1";
        containerRef.current.style.zIndex = "990";
      } else {
        contentsRef.current.style.transform = "scale(0)";
        containerRef.current.style.opacity = "0";
        containerRef.current.style.zIndex = "-990";
      }
    }
  }, [isOpen]);

  return (
    <Container ref={containerRef}>
      <div className="contents_wrap" ref={contentsRef}>
        <FontAwesomeIcon
          icon={faXmark}
          className="x_mark"
          onClick={clickHandler}
        />
        {children}
      </div>
    </Container>
  );
};

export default PopUpContents;
