// import '../styles/globals.css'
// import React, { Fragment, useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// // import 'bootstrap/dist/css/bootstrap.css'
// import Head from "next/head";
// import Script from "next/script";
// import Link from 'next/link';

// export default function MyApp({ Component, pageProps }) {
//   const [showChild, setShowChild] = useState(false);
//   useEffect(() => {
//     setShowChild(true);
//   }, []);

//   if (!showChild) {
//     return null;
//   }

//   if (typeof window === 'undefined') {
//     return <>32432543543</>;
//   } else {
//     return (
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
        
//     );
//   }
// }

import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/product.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
