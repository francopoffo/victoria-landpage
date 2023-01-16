import React from "react";
import MainHeader from "./MainHeader";
import Banner from "./Banner";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <MainHeader />
      <Banner />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
