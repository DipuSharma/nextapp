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
    removeUserSession()
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
        <Link href={`/userauth/verification`}>
          <a></a>
        </Link>
      </li>
      <li className="verifyemail">
        <Link href={`/userauth/verification?token=${token}`}>
          <a></a>
        </Link>
      </li>
      <li className="listitem">
        <i className="fa-solid fa-right-to-bracket" style={{'marginLeft':5, 'marginRight':5}}></i>
        <Link href='/userauth/signup'>SignUp
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li className="listitem dropdown">
        <div className="dropdown">
          <Link href='/userauth/profile' className="dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li className="dropdown-listitem">
              <Link href='/userauth/profile' className="dropdown-item">View Details</Link>
            </li>
            <li className="dropdown-listitem">
              <Link href='/userauth/order_view' className="dropdown-item">View Order</Link>
            </li>
            <li className="dropdown-listitem">
              <Link href='/userauth/profile' className="dropdown-item">Another action</Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li onClick={handleLogout} className="dropdown-listitem">
              <Link href="#!" className="dropdown-item">Logout</Link>
            </li>
          </ul>
        </div>
      </li>
    </Fragment>
  );


  return (
    <>
      <Head>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <link href="../styles/globals.css"/>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://code.jquery.com/jquery-3.5.1.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" />
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="navbar-home">
          <Link href="/">Navbar</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="item">
              <ul className="navbar-nav">
                <li className="listitem">
                  <i className="fa-solid fa-house" style={{'marginRight':5}}></i>
                  <Link href="/">Home</Link>
                </li>
                <li className="listitem">
                  <Link href="/product/product">Product 
                  </Link>
                </li>
                <li className="listitem">
                  <Link href="/about">About 
                  </Link>
                </li>
                <li className="listitem">
                  <Link href="/contact"> Contact 
                  </Link>
                </li>

                {/* {user ? authLinks : guestLinks} */}
              </ul>
            </div>
            <div className="item ms-auto mb-2 mb-lg-0">
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
