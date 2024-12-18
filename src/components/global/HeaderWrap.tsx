import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  right: 0;
  width: calc(100vw - var(--nav-width));
  height: var(--header-height);
  background-color: var(--sub-color-wh);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 55px 0 45px;
  .title {
    font-size: var(--heading-size);
    font-weight: 900;
  }
  .left_wrap {
    display: flex;
    align-items: center;
    form {
      position: relative;
      margin-right: 40px;
      input {
        all: unset;
        box-sizing: border-box;
        width: 370px;
        height: 60px;
        border: 1px solid var(--gray-2);
        border-radius: 15px;
        display: flex;
        align-items: center;
        padding-left: 60px;
        font-size: var(--title-size);
        transition: 0.25s ease-in-out;
        &::placeholder {
          color: var(--gray-2);
        }
        &:focus {
          border: 1px solid var(--sub-color-b);
        }
      }
      svg {
        position: absolute;
        color: var(--gray-2);
        top: 50%;
        transform: translateY(-50%);
        font-size: var(--title-size);
        left: 23px;
      }
    }
    .notice_wrap {
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 45px;
      svg {
        color: var(--sub-color-b);
        font-size: var(--title-size);
      }
      .notice_num {
        position: absolute;
        width: 35px;
        height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--sub-color-r);
        color: var(--sub-color-wh);
        font-size: var(--medium-size);
        border-radius: 10px;
        font-weight: 900;
        top: -14px;
        left: 7px;
      }
    }
    .profile_wrap {
      width: 190px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .profile_img {
          width: 45px;
          height: 45px;
          border-radius: 45px;
          background-color: gray;
          margin-right: 10px;
        }
        .profile_info {
          height: 45px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .user_name {
            font-size: var(--title-size);
            color: var(--sub-color-b);
            font-weight: 900;
          }
          .user_position {
            font-size: var(--normal-size);
            color: var(--gray-3);
          }
        }
      }
    }
  }
`;

const HeaderWrap = () => {
  return (
    <Container>
      <div className="title">메인</div>

      <div className="left_wrap">
        <form>
          <input type="text" placeholder="검색하기..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>

        <div className="notice_wrap">
          <Link to={"#"}>
            <FontAwesomeIcon icon={faBell} />
            <div className="notice_num">29</div>
          </Link>
        </div>

        <div className="profile_wrap">
          <Link to={"#"}>
            <div className="profile_img"></div>
            <div className="profile_info">
              <div className="user_name">수달</div>
              <div className="user_position">변호사</div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HeaderWrap;
