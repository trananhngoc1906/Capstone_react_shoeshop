import React from "react";

const FooterHome = () => {
  return (
    <>
      <div className="container footer">
        <div className="footer__top row">
          <div className="footer__left col-4">
            <h5>GET HELP</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">Adidas</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__mid col-4">
            <h5>SUPPORT</h5>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Phone</a>
              </li>
            </ul>
          </div>
          <div className="footer__right col-4">
            <h5>REGISTER</h5>
            <ul>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bot">
        <div>
          © 2022 Cybersoft All Rights Reserved | Copied by Trần Anh Ngọc
        </div>
      </div>
    </>
  );
};

export default FooterHome;
