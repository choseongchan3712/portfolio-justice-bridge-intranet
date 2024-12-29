import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: all 0.3s ease-in-out;

  .title {
    color: var(--sub-color-b);
    font-size: var(--heading-size);
    font-weight: 900;
    white-space: nowrap;
  }

  .left_wrap {
    display: flex;
    align-items: center;
    gap: 40px;

    form {
      position: relative;
      input {
        all: unset;
        box-sizing: border-box;
        width: 370px;
        height: 40px;
        border: 1px solid var(--gray-2);
        color: var(--sub-color-b);
        border-radius: 10px;
        padding: 0 20px 0 50px;
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
        left: 20px;
      }
    }

    .right_menu {
      display: flex;
      align-items: center;
      gap: 30px;

      .notice_wrap {
        position: relative;
        svg {
          color: var(--sub-color-b);
          font-size: var(--title-size);
        }
        .notice_num {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--sub-color-r);
          color: var(--sub-color-wh);
          font-size: var(--small-size);
          font-weight: 900;
          padding: 2px 6px;
          border-radius: 10px;
          min-width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .profile_wrap {
        a {
          display: flex;
          align-items: center;
          gap: 12px;
          
          .profile_img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: gray;
          }
          
          .profile_info {
            .user_name {
              color: var(--sub-color-b);
              font-size: var(--title-size);
              font-weight: 900;
              margin-bottom: 2px;
            }
            .user_position {
              color: var(--gray-3);
              font-size: var(--normal-size);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    padding: 0 40px;
    .left_wrap {
      gap: 30px;
      form input {
        width: 300px;
      }
      .right_menu {
        gap: 25px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
    .left_wrap {
      gap: 25px;
      form input {
        width: 250px;
      }
      .right_menu {
        gap: 20px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0 20px 0 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: var(--title-size);
    }

    .left_wrap {
      gap: 20px;

      form {
        display: none;
      }

      .right_menu {
        gap: 20px;
        
        .profile_wrap {
          a {
            .profile_img {
              width: 35px;
              height: 35px;
            }
            .profile_info {
              display: none;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px 0 150px;
    height: 50px;

    .title {
      font-size: var(--normal-size);
    }

    .left_wrap {
      gap: 15px;
      .right_menu {
        gap: 15px;
        .profile_wrap {
          a {
            .profile_img {
              width: 32px;
              height: 32px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 0 12px 0 120px;
    height: 45px;

    .title {
      font-size: var(--medium-size);
    }

    .left_wrap {
      gap: 12px;
      .right_menu {
        gap: 12px;
        .profile_wrap {
          a {
            .profile_img {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
`;

const HeaderWrap = () => {
  const [title, setTitle] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname) {
      if (location?.pathname === "/main") {
        setTitle("메인");
      } else if (location?.pathname === "/document") {
        setTitle("문서관리");
      } else if (location?.pathname === "/chat") {
        setTitle("채팅");
      } else if (location?.pathname === "/notice") {
        setTitle("게시판");
      } else if (location?.pathname === "/law") {
        setTitle("법률정보");
      } else if (location?.pathname === "/setting") {
        setTitle("설정");
      }
    }
  }, [location]);

  return (
    <Container>
      <div className="title">{title}</div>

      <div className="left_wrap">
        <form>
          <input type="text" placeholder="검색하기..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>

        <div className="right_menu">
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
      </div>
    </Container>
  );
};

export default HeaderWrap;
