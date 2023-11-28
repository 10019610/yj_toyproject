"use client";

import { useSession } from "next-auth/react";

import React from "react";
import classes from "./Hamburger.module.css";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

const HamburgerMenu = ({ isOpen, onClose }) => {
  const session = useSession();
  if (session) {
    console.log(session);
  }

  function logoutHandler() {
    signOut({ redirect: true, callbackUrl: "/" });
  }

  return (
    <div className={`${classes.hamburger_menu} ${isOpen ? classes.open : ""}`}>
      <div>
        <span className={classes.head}>0__J0</span>
        <span className={classes.closeBtn}>
          <img src="/close.png" onClick={onClose} />
        </span>
      </div>
      {!session.data && (
        <span>
          <Link href="/signin" onClick={onClose}>
            <button className={classes.inBtn}>Sign In</button>
          </Link>
        </span>
      )}
      {!session.data && (
        <span>
          <Link href="/signup" onClick={onClose}>
            <button className={classes.upBtn}>Sign Up</button>
          </Link>
        </span>
      )}
      <hr className={classes.hr1} />
      <ul className={classes.menu}>
        <li>
          <Link href="/list" onClick={onClose}>
            리스트입니다
          </Link>
        </li>
        <li>
          <Link href="/member" onClick={onClose}>
            member
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            menu3
          </Link>
        </li>
      </ul>
      {session.data && (
        <div>
          <button onClick={logoutHandler} className={classes.logoutBtn}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
