import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../../components/FooterHome/FooterHome";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />
      <section className="content" style={{ minHeight: "75vh" }}>
        <Outlet />
      </section>

      <FooterHome/>
    </>
  );
};

export default HomeTemplate;


