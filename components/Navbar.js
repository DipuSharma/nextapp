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
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
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
            </div>
          </div>
        </nav>
      </Fragment>
    </>
  );
};

export default Navbar;
