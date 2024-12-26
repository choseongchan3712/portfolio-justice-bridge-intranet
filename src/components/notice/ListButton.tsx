import styled from "styled-components";
import { ListButtonType } from "../../type";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 65px;
  padding-top: 15px;
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--gray-3);
    font-size: var(--normal-size);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease-in-out;
    border-radius: 20px;
    &:hover {
      background-color: var(--gray-1);
    }
  }
`;

const ListButton = ({ title, link }: ListButtonType) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [locationName, setLocationName] = useState<string>();
  const linkElement = buttonRef.current?.querySelector("a");

  useEffect(() => {
    setLocationName(location.pathname);
  }, [location]);

  useEffect(() => {
    if (locationName === "/notice") {
      if (linkElement?.textContent === "회사 게시물") {
        linkElement.style.backgroundColor = "var(--back-r)";
        linkElement.style.color = "var(--main-color)";
      } else if (linkElement?.textContent === "부서 게시물") {
        linkElement.style.backgroundColor = "unset";
        linkElement.style.color = "unset";
      } else if (linkElement?.textContent === "팀 게시물") {
        linkElement.style.backgroundColor = "unset";
        linkElement.style.color = "unset";
      }
    } else if (locationName === "/notice/group") {
      if (linkElement?.textContent === "부서 게시물") {
        linkElement.style.backgroundColor = "var(--back-r)";
        linkElement.style.color = "var(--main-color)";
      } else if (linkElement?.textContent === "회사 게시물") {
        linkElement.style.backgroundColor = "unset";
        linkElement.style.color = "unset";
      } else if (linkElement?.textContent === "팀 게시물") {
        linkElement.style.backgroundColor = "unset";
        linkElement.style.color = "unset";
      }
    } else if (locationName === "/notice/team") {
      if (linkElement?.textContent === "팀 게시물") {
        linkElement.style.backgroundColor = "var(--back-r)";
        linkElement.style.color = "var(--main-color)";
      } else if (linkElement?.textContent === "회사 게시물") {
        linkElement.style.backgroundColor = "unset";
        linkElement.style.color = "unset";
      } else if (linkElement?.textContent === "부서 게시물") {
        linkElement.style.backgroundColor = "unset";
        linkElement.style.color = "unset";
      }
    }
  }, [locationName]);

  return (
    <Container ref={buttonRef}>
      <Link to={link}>{title}</Link>
    </Container>
  );
};

export default ListButton;
