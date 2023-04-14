import React from "react";
import Sidebar from "./Sidebar";
import MainContentHome from "./MainContentHome";
import NavbarBottom from "./NavbarBottom";

function Homepage() {
  return (
    <>
      <Sidebar />
      <MainContentHome />
      <NavbarBottom />
    </>
  );
}

export default Homepage;
