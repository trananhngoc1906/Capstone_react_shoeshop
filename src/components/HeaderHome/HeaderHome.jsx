import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { huyStore, TOKEN, USER_LOGIN } from "../../util/config";

const HeaderHome = () => {
  const { userLogin } = useSelector((state) => state.userReducer);

  const renderLogin = () => {
    if (userLogin) {
      return (
        <>
          <div>
            <NavLink to="/profile">Xin chào {userLogin.email}</NavLink>
          </div>
          <div>
            <NavLink
              onClick={() => {
                huyStore(USER_LOGIN);
                huyStore(TOKEN);
                window.location.reload();
              }}
            >
              Đăng xuất
            </NavLink>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <NavLink to="/login">Đăng nhập</NavLink>
        </div>
        <div>
          <NavLink to="/register">Đăng ký</NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="bg-dark">
        <div className="header-top container">
          <div className="header__left">
            <NavLink to="/home">
              <img src="../img/cyberlogo-white.png" alt="..." />
            </NavLink>
          </div>
          <div className="header__right">
            <div>
              <NavLink to="/search">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>Search
              </NavLink>
            </div>
            <div>
              <i className="fa fa-cart-plus"></i>
              <span>(1)</span>
            </div>
            {renderLogin()}
          </div>
        </div>
      </div>
      <div className="header-bot container">
        <span>Home</span>
        <span>Men</span>
        <span>Women</span>
        <span>Kids</span>
        <span>Sport</span>
        <span>Sale</span>
      </div>
    </div>
  );
};

export default HeaderHome;
