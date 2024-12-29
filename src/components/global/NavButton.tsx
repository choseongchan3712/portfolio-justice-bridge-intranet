import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  border: 15px;
  display: flex;
  align-items: center;
  padding-left: 74px;
  margin-bottom: 5px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  a {
    color: var(--gray-3);
    font-size: var(--title-size);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
  }

  &:hover {
    background-color: var(--gray-1);
    transform: scale(1.05);
  }

  @media screen and (max-width: 992px) {
    width: 16.666%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0;

    a {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      padding: 0;
      width: 100%;
      font-size: var(--medium-size);
      white-space: nowrap;
    }

    svg {
      position: static;
      transform: none;
      font-size: var(--title-size);
    }

    &:hover {
      transform: none;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: var(--small-size);
    }

    svg {
      font-size: var(--normal-size);
    }
  }

  @media screen and (max-width: 576px) {
    svg {
      font-size: var(--medium-size);
    }
  }
`;

interface NavButtonType {
  title: string;
  children: React.ReactNode;
  link: string;
}

const NavButton = ({ title, children, link }: NavButtonType) => {
  const [location, setLocation] = useState<string>();
  const [locationName, setLocationName] = useState<string>();
  const nowLocation = useLocation().pathname;
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLocation(nowLocation);
  }, [nowLocation]);

  useEffect(() => {
    if (location?.includes("/main")) {
      setLocationName("메인");
    } else if (location?.includes("/document")) {
      setLocationName("문서관리");
    } else if (location?.includes("/chat")) {
      setLocationName("채팅");
    } else if (location?.includes("/notice")) {
      setLocationName("게시판");
    } else if (location?.includes("/management")) {
      setLocationName("업무관리");
    } else if (location?.includes("/law")) {
      setLocationName("법률정보");
    } else if (location?.includes("/setting")) {
      setLocationName("설정");
    }
  }, [location]);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    const anchorElement = buttonElement?.querySelector<HTMLAnchorElement>("a");

    if (locationName === buttonRef.current?.textContent) {
      if (buttonElement && anchorElement) {
        const mouseEnterHandler = () => {
          buttonElement.style.backgroundColor = "var(--back-r)";
        };
        const mouseLeaveHandler = () => {
          buttonElement.style.backgroundColor = "var(--back-r)";
        };
        buttonElement.style.backgroundColor = "var(--back-r)";
        anchorElement.style.color = "var(--main-color)";
        buttonElement.addEventListener("mouseenter", mouseEnterHandler);
        buttonElement.addEventListener("mouseleave", mouseLeaveHandler);
      }
    } else if (locationName !== buttonRef.current?.textContent) {
      if (buttonElement && anchorElement) {
        const mouseEnterHandler = () => {
          buttonElement.style.backgroundColor = "var(--gray-1)";
        };
        const mouseLeaveHandler = () => {
          buttonElement.style.backgroundColor = "unset";
        };
        buttonElement.style.backgroundColor = "unset";
        anchorElement.style.color = "var(--gray-3)";
        buttonElement.addEventListener("mouseenter", mouseEnterHandler);
        buttonElement.addEventListener("mouseleave", mouseLeaveHandler);
      }
    }
  }, [locationName]);

  return (
    <Container ref={buttonRef}>
      <Link to={link}>
        {children}
        {title}
      </Link>
    </Container>
  );
};

export default NavButton;
