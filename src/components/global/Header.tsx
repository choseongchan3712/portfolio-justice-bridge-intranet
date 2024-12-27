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

const Nav = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  min-height: 100vh;
  height: fit-content;
  width: var(--nav-width);
  box-shadow: 1px 0 5px var(--gray-3);
  background-color: var(--sub-color-wh);
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: var(--nav-width);
    height: var(--header-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--gray-2);
    a {
      color: var(--sub-color-b);
      font-size: var(--heading-size);
      font-weight: 900;
    }
  }
  .menu_wrap {
    padding-top: 90px;
    width: 100%;
    height: calc(100% - var(--header-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
    .page_menu_wrap {
      width: 100%;
    }
  }
`;

const Header = () => {
  

  return (
    <>
      <HeaderWrap />
      <Nav>
        <div className="logo">
          <Link to={"/"}>JusticeBridge</Link>
        </div>
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
            <NavButton title="업무관리" link="/management">
              <FontAwesomeIcon icon={faBriefcase} />
            </NavButton>
            <NavButton title="법률정보" link="/law">
              <FontAwesomeIcon icon={faGavel} />
            </NavButton>
          </div>
          <NavButton title="설정" link="/setting">
            <FontAwesomeIcon icon={faGear} />
          </NavButton>
        </div>
      </Nav>
    </>
  );
};

export default Header;
