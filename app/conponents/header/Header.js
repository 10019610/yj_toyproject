"use client"; // this is a client component

import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import classes from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className={classes.nav} style={{ display: "flex" }}>
        <HamburgerButton onClick={handleMenuClick} />
        <div className={classes.logo}>
          <Link href="/" className={classes.main}>
            {/* <img className={classes.logo_image} src="" /> */}내가 만드는
            홈페이지
          </Link>
        </div>
      </div>
      <HamburgerMenu isOpen={menuOpen} onClose={handleCloseMenu} />
    </header>
  );
};

export default Header;
