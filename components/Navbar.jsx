import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Fragment, useEffect } from 'react';
import { getUser, getToken, removeUserSession, removeRegistrationSession } from '../utils/common';
import { useRouter } from "next/router";
const Navbar = () => {
  const user = getUser()
  const token = getToken()
  const router = useRouter()

  const handleLogout = () => {
    console.log("logout");
    router.push('/userauth/signin')
  }

  setTimeout(() => {
    if (token) {
      removeUserSession();
      removeRegistrationSession();
      alert("Your are not authenticated.");
      router.push("/userauth/signin");
    }
  }, 12960000);

  const guestLinks = (
    <Fragment>
      <li className="verifyemail">
        <Link href="/userauth/verification">
          <a></a>
        </Link>
      </li>
      <li className="verifyemail">
        <Link href={`/userauth/verification?token=${token}`}>
          <a></a>
        </Link>
      </li>
      <li className="listitem">
        <Link href='/userauth/signup'>
          <a>SignUp</a>
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li className="listitem">
        <Link href='/userauth/profile'>
          <a>Profile</a>
        </Link>
      </li>
      <li className="listitem">
        <Link href='/userauth/address'>
          <a></a>
        </Link>
      </li>
      <li className="listitem">
        <Link href='/userauth/address'>
          <a><span className="fa fa-cart"></span></a>
        </Link>
      </li>
      <li onClick={handleLogout} className="listitem">
        <a href='#!'>Logout</a>
      </li>
    </Fragment>
  );


  return (
    <>
      <Head>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://code.jquery.com/jquery-3.5.1.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" />
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <Link href="/"><a className="navbar-brand" href="/">Navbar</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="item">
              <ul className="navbar-nav">
                <li className="listitem">
                  <Link href="/">
                    <a> Home </a>
                  </Link>
                </li>
                <li className="listitem">
                  <Link href="/product">
                    <a> Product </a>
                  </Link>
                </li>
                <li className="listitem">
                  <Link href="/about">
                    <a> About </a>
                  </Link>
                </li>
                <li className="listitem">
                  <Link href="/contact">
                    <a> Contact </a>
                  </Link>
                </li>
                
                {/* {user ? authLinks : guestLinks} */}
              </ul>
            </div>
            <div className="item">
              <ul className="navbar-nav">
                {user ? authLinks : guestLinks}
              </ul>

            </div>

          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
