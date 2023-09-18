import React from "react";
import DrawerAppBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <DrawerAppBar>{children}</DrawerAppBar>
    </>
  );
};

export default Layout;
