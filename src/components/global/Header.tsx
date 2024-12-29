import { Link } from "react-router-dom";
import styled from "styled-components";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComment,
  faFile,
  faGavel,
  faGear,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import HeaderWrap from "./HeaderWrap";

const LogoContainer = styled.div`
  position: fixed;
  z-index: 501;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: var(--header-height);
  background-color: var(--sub-color-wh);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--gray-2);
  border-right: 1px solid var(--gray-2);

  a {
    color: var(--sub-color-b);
    font-size: var(--heading-size);
    font-weight: 900;
  }

  @media screen and (max-width: 992px) {
    width: auto;
    padding: 0 20px;
    border-right: none;
    
    a {
      font-size: var(--title-size);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
    a {
      font-size: var(--normal-size);
    }
  }

  @media screen and (max-width: 576px) {
    padding: 0 12px;
    a {
      font-size: var(--medium-size);
    }
  }
`;

const Nav = styled.div`
  position: fixed;
  z-index: 500;
  top: var(--header-height);
  left: 0;
  min-height: calc(100vh - var(--header-height));
  height: fit-content;
  width: var(--nav-width);
  box-shadow: 1px 0 5px var(--gray-3);
  background-color: var(--sub-color-wh);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  .menu_wrap {
    padding-top: 90px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
    .page_menu_wrap {
      width: 100%;
    }
  }

  @media screen and (max-width: 992px) {
    top: unset;
    bottom: 0;
    min-height: unset;
    height: 60px;
    width: 100%;
    padding: 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    .menu_wrap {
      padding: 0;
      height: 100%;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .page_menu_wrap {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 55px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderWrap />
      <LogoContainer>
        <Link to={"/"}>JusticeBridge</Link>
      </LogoContainer>
      <Nav>
        <div className="menu_wrap">
          <div className="page_menu_wrap">
            <NavButton title="메인" link="/main">
              <FontAwesomeIcon icon={faHouse} />
            </NavButton>
            <NavButton title="문서관리" link="/document">
              <FontAwesomeIcon icon={faFile} />
            </NavButton>
            <NavButton title="채팅" link="/chat">
              <FontAwesomeIcon icon={faComment} />
            </NavButton>
            <NavButton title="게시판" link="/notice">
              <FontAwesomeIcon icon={faList} />
            </NavButton>
            <NavButton title="법률정보" link="/law">
              <FontAwesomeIcon icon={faGavel} />
            </NavButton>
            <NavButton title="설정" link="/setting">
              <FontAwesomeIcon icon={faGear} />
            </NavButton>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header;
