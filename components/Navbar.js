import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useEffect } from 'react';
import { getUser, getToken, removeUserSession } from '../utils/common';
import { useRouter } from "next/router";

const Navbar = () => {
  const Title = "Home"
  const user = getUser()
  const token = getToken()
  const router = useRouter()

  const handleLogout = () => {
    console.log("logout");
    removeUserSession();
    router.push('/userauth/signin')
  }
  const guestLinks = (
    <Fragment>
      <li>
        <Link href='/userauth/signin'>
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href='/userauth/signup'>
          <a>Register</a>
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link href='/userauth/profile'>
          <a>Profile</a>
        </Link>
      </li>
      <li onClick={handleLogout}>
        <a href='#!'>Logout</a>
      </li>
    </Fragment>
  );


  return (
    <>
      <Head>
        <title>{Title} Page</title>
      </Head>
      <Fragment>
        <nav>
          <ul className="menu-bar">
            <li>
              <Link href="/">
                <a> Home </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a> About </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a> Contact </a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a> Product </a>
              </Link>
            </li>
            {user ? authLinks : guestLinks}
          </ul>
        </nav>
      </Fragment>
    </>
  );
};

export default Navbar;
